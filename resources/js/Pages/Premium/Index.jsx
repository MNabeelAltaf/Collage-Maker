import React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import { Head, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ActionBar from "@/Components/ActionBar";
import List from "@mui/material/List";
import ModelComponent from "@/Components/ModelComponent";
import { Box, Stack, Typography } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import EnterPremium from "@/Components/EnterNewPremium";
import ExistingCategories from "@/Components/ExistingCategories";
import Grow from "@mui/material/Grow";
import EventCategoryModalComponent from "@/Components/EventCategoryModalComponent";

export default function Index({
    auth,
    categories,
    title,
    headerOptions,
    apiToken,
    PremiumEventFromServer,
}) {
    const [categoryAddedSnackbarStatus, setCategoryAddedSnackbarStatus] =
        React.useState({ status: false, message: "", color: "" });
    const [modalState, setModalState] = useState({});
    const [PremiumEvent, setPremiumEvent] = useState(PremiumEventFromServer);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [open, setOpen] = React.useState({
        status: false,
        message: "",
        severity: "",
    });

    React.useEffect(() => {
        let data = headerOptions[0];
        setModalState({
            title: data["title"],
            isOpen: false,
            href: data["href"],
            eventId: undefined,
        });
    }, []);

    const resetSnackbarStatus = () => {
        setCategoryAddedSnackbarStatus({
            status: false,
            message: "",
            color: "",
        });
    };

    const inputRef = useRef(null);

    const handleSnackbarClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
    };

    const handleModalBtnClick = (eventId, isClosing = false) => {
        isClosing = !modalState.isOpen;

        if (isClosing) {
            setModalState({
                ...modalState,
                isOpen: true,
                eventId: +eventId,
            });
        } else {
            setModalState({
                ...modalState,
                isOpen: false,
                eventId: undefined,
            });
        }
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") return;
        setOpen(false);
    };

    const openSnackbar = (message, severity) => {
        setOpen({
            status: true,
            message,
            severity,
        });
    };

    const addEvent = async (PremiumEvent, data) => {
        setIsSubmitting(true);


        // console.log(data);


        const premiumEventArray = Array.isArray(PremiumEvent)
            ? PremiumEvent
            : [];

        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("image", data.image);
        formData.append("voice", data.voice);
        formData.append("is_premium", data.is_premium);


        try {
            const response = await axios.post(route("add.premium"), formData, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + apiToken,
                },
            });

            openSnackbar("Premium has been created", "success");

            // Set the new event array with the added event
            const newEventArr = [...premiumEventArray, response.data.data]; // Adjust according to your API response
            setPremiumEvent(newEventArr);
        } catch (error) {
            console.error("Error adding Premium event:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-bold text-xl text-gray-800 leading-tight">
                    {title}
                </h2>
            }
            actionBar={
                <ActionBar
                    headerOptions={headerOptions}
                    handleChange={handleModalBtnClick}
                />
            }
        >
            <Head title={"Premium"} />
            {open.status && (
                <Snackbar
                    open={open.status}
                    autoHideDuration={4000}
                    onClose={handleClose}
                    TransitionComponent={Grow}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                >
                    <Alert
                        onClose={handleClose}
                        severity={open.severity}
                        variant="filled"
                        sx={{ width: "100%" }}
                    >
                        {open.message}
                    </Alert>
                </Snackbar>
            )}
            <div className="square-pattern-bg ">
                {categoryAddedSnackbarStatus["status"] && (
                    <Snackbar
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                        open={categoryAddedSnackbarStatus["status"]}
                        autoHideDuration={3500}
                        onClose={handleSnackbarClose}
                    >
                        <Alert
                            onClose={handleSnackbarClose}
                            severity={categoryAddedSnackbarStatus["color"]}
                            variant="filled"
                            sx={{ width: "100%" }}
                        >
                            {categoryAddedSnackbarStatus["message"]}
                        </Alert>
                    </Snackbar>
                )}

                {modalState["eventId"] && (
                    <EventCategoryModalComponent
                        eventId={modalState["eventId"]}
                        href={modalState["href"]}
                        isOpen={modalState["isOpen"]}
                        closed={(e) => handleModalBtnClick(e, true)}
                        categories={categories}
                    />
                )}

                <List
                    className="categoriey-items"
                    sx={{
                        width: "100%",
                        padding: "15px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: "60%",
                            padding: "15px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                        }}
                    >
                        {/* <ExistingCategories
                            PremiumEvent={PremiumEvent}
                            onClick={handleModalBtnClick}
                        /> */}
                        <EnterPremium
                            isSubmitting={isSubmitting}
                            addEvent={addEvent}
                        />
                    </Box>
                </List>
            </div>
        </AuthenticatedLayout>
    );
}
