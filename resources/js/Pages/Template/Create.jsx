import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useCallback, useState } from 'react';
import ActionBar from '@/Components/ActionBar';
import axios from 'axios';
import FileInputWithPreview from '@/Components/FileInputWithPreview';
import { Box, Stack, TextField, Typography } from '@mui/material';
import CustomSelectCategoryBox from '@/Components/CustomSelectCategoryBox';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Grow from '@mui/material/Grow';

export default function Create({ auth, type, title, headerOptions, categories, apiToken }) {

    const [selectedCategory, setSelectedCategory] = React.useState({ name: "", id: "" });
    const [isCreateButtonDisabled, setIsCreateButtonDisabled] = useState(false);
    const changeCategory = (e, i) => {
        if (i)
            setSelectedCategory({ name: i.name, id: i.id });
    }

    React.useEffect(() => {
        console.log('this is now selected: ' + selectedCategory['name']);
    }, [selectedCategory])

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [fileInputs, setFileInputs] = useState([]); // Start with one file input
    const [info, setInfo] = useState({
        'title': "",
        'tags': "",
        'height': "",
        'width': "",
    });

    const [open, setOpen] = useState({
        status: false,
        message: "",
        severity: "",
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway')
            return;
        setOpen(false);
    };

    const openSnackbar = (message, severity) => {
        setOpen({
            status: true,
            message, severity
        });
    };

    const handleInputChange = (type, value) => {
        setInfo((prevInfo) => ({
            ...prevInfo,
            [type]: value,
        }));
    }

    const handleFileChange = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const newSelectedFiles = [...selectedFiles];
            newSelectedFiles[index] = {
                id: file.name,  // Or any other ID you have
                src: URL.createObjectURL(file),
                x: 0,           // Placeholder for x coordinate
                y: 0,           // Placeholder for y coordinate
                rotation: 0,    // Placeholder for rotation
                image: file,
                isFrame: false,   // Default to false
                isText: false,  // Default to false
                isTop: false,  // Default to false
                text: false,  // Default to false
                shapeType: ""  // Default to false
            };
            setSelectedFiles(newSelectedFiles);
        }
    };

    const handleTextChange = (index, event) => {
        const newSelectedFiles = [...selectedFiles];
        newSelectedFiles[index].text = event.target.value;
        setSelectedFiles(newSelectedFiles);
    };

    const handleCheckboxChange = (index, event, type) => {
        const newSelectedFiles = [...selectedFiles];
        if (newSelectedFiles[index]) {
            if (type === "frame")
                newSelectedFiles[index].isFrame = event.target.checked;
            if (type === "text")
                newSelectedFiles[index].isText = event.target.checked;
            if (type === "isTop")
                newSelectedFiles[index].isTop = event.target.checked;
            if (type === "shapeType")
                newSelectedFiles[index].shapeType = event.target.value;
            setSelectedFiles(newSelectedFiles);
        }
    };

    const handleRemoveFileInput = (index) => {
        const newFileInputs = fileInputs.filter((_, i) => i !== index);
        const newSelectedFiles = selectedFiles.filter((_, i) => i !== index);
        setFileInputs(newFileInputs);
        setSelectedFiles(newSelectedFiles);
    };

    const handleAddFileInput = () => {
        setFileInputs([...fileInputs, fileInputs.length]);
    };

    const handleSubmit = useCallback(() => {

        if (selectedCategory['name'] && isCreateButtonDisabled === false) {
            setIsCreateButtonDisabled(true)
            const formData = new FormData();
            let frameCount = 0;
            selectedFiles.forEach((item, index) => {
                if (item.isFrame)
                    frameCount++;
                console.log(item.shapeType);
                formData.append(`items[${index}][id]`, item.id);
                formData.append(`items[${index}][src]`, item.src);
                formData.append(`items[${index}][x]`, item.x);
                formData.append(`items[${index}][y]`, item.y);
                formData.append(`items[${index}][rotation]`, item.rotation);
                formData.append(`items[${index}][image]`, item.image);
                formData.append(`items[${index}][isFrame]`, item.isFrame ? '1' : '0');
                formData.append(`items[${index}][isText]`, item.isText ? '1' : '0');
                formData.append(`items[${index}][text]`, item.text);
                formData.append(`items[${index}][isTop]`, item.isTop ? '1' : '0');
                formData.append(`items[${index}][shapeType]`, item.shapeType || 0);
            });
            formData.append('user_id', auth.user.id);
            formData.append('title', info['title']);
            formData.append('tags', info['tags']);
            formData.append('height', info['height']);
            formData.append('width', info['width']);
            formData.append('source', "panel");
            formData.append('frameCount', frameCount);
            formData.append('category_id', selectedCategory['id']);
            // const apiToken = localStorage.getItem('apiToken');
            axios.post(route('save.template'), formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${apiToken}`,
                }
            }).then(response => {
                // console.log(response.data);
                window.location.href = route("view.all.templates");
            }).catch(error => {
                // console.error('Error : ', error);
            });
        } else {
            openSnackbar("Select a category first", "warning");
        }
    }, [selectedFiles]);

    const actions = {
        "Create": function () {
            handleSubmit();
        },
        "Add Image": function () {
            handleAddFileInput();
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Template</h2>}
            actionBar={<ActionBar isCreateButtonDisabled={isCreateButtonDisabled} actions={actions} headerOptions={headerOptions} >
                <CustomSelectCategoryBox categories={categories} changeCategory={changeCategory} />
            </ActionBar>}
        >
            <Head title="Dashboard" />

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

            <Snackbar />
            <div className="square-pattern-bg">
                <div className="py-12" style={{ width: "100%" }}>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8" style={{ position: "relative", width: "100%" }}>
                        <Stack spacing={5} direction={'row'} justifyContent={"center"} sx={{
                            padding: "30px 0px",
                            backgroundColor: "white",
                            width: "100%"
                        }}>
                            <Stack spacing={1}>
                                <Typography variant="p" component="p">Enter title for template</Typography>
                                <TextField onChange={(e) => { handleInputChange("title", e.target.value) }} value={info['title']} sx={{ width: "200px" }} id="outlined-basic" label="Title" variant="outlined" />
                            </Stack>
                            <Stack spacing={1}>
                                <Typography variant="p" component="p">Enter tags for template</Typography>
                                <TextField onChange={(e) => { handleInputChange("tags", e.target.value) }} value={info['tags']} sx={{ width: "200px" }} id="outlined-basic" label="Tags" variant="outlined" />
                            </Stack>
                            <Stack spacing={1}>
                                <Typography variant="p" component="p">Enter width for template</Typography>
                                <TextField onChange={(e) => { handleInputChange("width", e.target.value) }} value={info['width']} sx={{ width: "200px" }} id="outlined-basic" label="Width" variant="outlined" />
                            </Stack>
                            <Stack spacing={1}>
                                <Typography variant="p" component="p">Enter height for template</Typography>
                                <TextField onChange={(e) => { handleInputChange("height", e.target.value) }} value={info['height']} sx={{ width: "200px" }} id="outlined-basic" label="Height" variant="outlined" />
                            </Stack>
                        </Stack>
                        {fileInputs.length == 0 && <Box sx={{
                            width: "100%", height: "30vh", display: "flex", justifyContent: "center", alignItems: "center"
                        }}>
                            <Typography variant="h5" component="h2" color={"#444"}>
                                Click "Add Image" button to add files
                            </Typography>
                        </Box>}
                        <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'}>
                            {fileInputs.map((input, index) => (
                                <FileInputWithPreview
                                    key={index}
                                    index={index}
                                    handleFileChange={handleFileChange}
                                    handleRemoveFileInput={handleRemoveFileInput}
                                    handleCheckboxChange={handleCheckboxChange}
                                    handleTextChange={handleTextChange}
                                    selectedFile={selectedFiles[index]}
                                    type={index > 1 ? "image" : index == 0 ? "thumbnail" : "shade"}
                                />
                            ))}
                        </Stack>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
