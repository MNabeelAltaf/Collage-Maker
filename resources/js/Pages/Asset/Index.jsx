import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';
import ActionBar from '@/Components/ActionBar';
import AssetImage from '@/Components/AssetImage';
import Card from '@mui/material/Card';

import { Box, Stack } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Grow from '@mui/material/Grow';
import axios from 'axios';
import CustomSelectCategoryBox from '@/Components/CustomSelectCategoryBox';
import TextButtonLink from '@/Components/TextButtonLink';


export default function Create({ auth, type, assets, title, headerOptions, token, categories }) {

    React.useEffect(() => {
        localStorage.setItem('token', token);
    }, [])

    const [open, setOpen] = React.useState({
        status: false,
        message: "",
        severity: "",
    });

    const prevCurrentPage = React.useRef();
    const prevSelectedCategory = React.useRef();

    const [templatesForSelectedCategory, setTemplatesForSelectedCategory] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [selectedCategory, setSelectedCategory] = React.useState({ name: "All Categories", id: "all" });

    const loadMore = () => {
        setCurrentPage(currentPage + 1);
    }

    React.useEffect(() => {
        if (prevCurrentPage.current !== undefined && prevSelectedCategory.current !== undefined) {
            if (prevSelectedCategory.current !== selectedCategory)
                setTemplatesForSelectedCategory([])
        }
        fetchTemplates(selectedCategory['name']);
        prevCurrentPage.current = currentPage;
        prevSelectedCategory.current = selectedCategory;
    }, [currentPage, selectedCategory]);

    const fetchTemplates = (category_name = "All Categories") => {
        // console.log("current category set to : " + selectedCategory['name'])
        axios.get(route("v2.get.assets.for.single.category", { type: "type", category_name }) + "?page=" + currentPage).then(
            response => {
                setTemplatesForSelectedCategory(prev => [...prev, ...response.data['images']]);
            }
            // setTemplatesForSelectedCategory(response.data['templates']);

        );
    }

    const changeCategory = (e, i) => {
        if (i) {
            setSelectedCategory({ name: i.name, id: i.id });
            if (currentPage != 1)
                // fetchTemplates(i.name);
                setCurrentPage(1);
        }
    }

    const openSnackbar = (message, severity) => {
        setOpen({
            status: true,
            message, severity
        });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway')
            return;
        setOpen(false);
    };

    const actions = {
        "Create": function () {
            handleSubmit();
        },
    };

    const handleRemoveFileInput = (uni) => {
        console.log("hii");
        axios.delete(route("delete.single.image.data", { uni }), {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        })
            .then(response => {
                openSnackbar("Asset has been deleted", "success");
                // console.log(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{title}</h2>}
            actionBar={<ActionBar actions={actions} headerOptions={headerOptions} >
                <CustomSelectCategoryBox categories={categories} changeCategory={changeCategory} />
            </ActionBar>}
        >
            <Head title={title} />
            {
                open.status && <Snackbar
                    open={open.status}
                    autoHideDuration={4000}
                    onClose={handleClose}
                    TransitionComponent={Grow}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <Alert
                        onClose={handleClose}
                        severity={open.severity}
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        {open.message}
                    </Alert>
                </Snackbar>
            }
            <div className="square-pattern-bg">
                <div className="py-12" style={{ width: "100%" }}>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8" style={{ position: "relative", width: "100%" }}>
                        <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'}>
                            {templatesForSelectedCategory.map((template, index) => (
                                <AssetImage asset_type={template['type']}
                                    category_name={template['category_name']}
                                    src={template['thumbnail']} key={index}
                                    isSingleImage={true}
                                    uni={template['uni']} title={template['title']}
                                    handleRemoveFileInput={handleRemoveFileInput} />
                            ))}
                        </Stack>
                        <Box direction={'row'} flexWrap={'wrap'} justifyContent={'center'}
                            sx={{ width: "100%", display: "flex" }} my={4}
                        >
                            <TextButtonLink action={loadMore} type={"action"} key={"abc"} href={""}>
                                {"Load More"}
                            </TextButtonLink>
                        </Box>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
