import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EnterNewpremium = ({ addEvent, isSubmitting }) => {
    useEffect(() => {
        // on change, clear form
    }, [isSubmitting]);

    const [neweventObj, setNeweventObj] = useState({
        title: "",
        image: "",
        voice: "",
        is_premium: false,
    });

    const [validationErrors, setValidationErrors] = useState({
        isError: false,
        errors: {},
    });

    const handleValueChange = (event, type) => {
        if (type === "is_premium") {
            const isChecked = event.target.checked;
            setNeweventObj((prev) => ({ ...prev, [type]: isChecked }));
        } else if (type === "image" || type === "voice") {
            const file = event.target.files[0];
            setNeweventObj((prev) => ({ ...prev, [type]: file }));
        } else {
            setNeweventObj((prev) => ({
                ...prev,
                [type]: event.target.value.trim(),
            }));
        }
    };

    const validate = () => {
        const errors = {};
        let isThereAnyErrors = false;
        if (neweventObj["title"].length < 3) {
            errors["title"] = "Minimum title length should be 3";
            isThereAnyErrors = true;
        }

        if (neweventObj["image"].length == 0) {
            errors["image"] = "Select Image";
            isThereAnyErrors = true;
        }

        if (neweventObj["voice"].length == 0) {
            errors["voice"] = "Select Voice";
            isThereAnyErrors = true;
        }

        if (isThereAnyErrors) setValidationErrors({ isError: true, errors });
        return isThereAnyErrors;
    };

    const onFormSubmit = (event) => {
        // event.preventDefault();

        if (!validate()) {
            setValidationErrors({ isError: false, errors: {} });
            addEvent(event, neweventObj);
        }
    };

    return (
        <Box sx={{ width: "30%", display: "flex", flexDirection: "column" }}>
            <Typography variant={"h5"} marginBottom={"20px"}>
                Create Premium
            </Typography>
            <form
                style={{ display: "flex", flexDirection: "column" }}
                action=""
                id="create-event-form"
                onSubmit={onFormSubmit}
                encType="multipart/form-data"
            >
                {/* Title Input */}
                <input
                    onChange={(event) => handleValueChange(event, "title")}
                    className="add-event-form-input"
                    type="text"
                    placeholder="Enter premium title"
                    name="title"
                />

                {validationErrors["errors"]["title"] && (
                    <Typography variant="p" className="input-validation-error">
                        {validationErrors["errors"]["title"]}
                    </Typography>
                )}

                {/* Image Input */}
                <label className="add-event-form-input">
                    <input
                        onChange={(event) => handleValueChange(event, "image")}
                        className="add-event-form-input"
                        type="file"
                        accept="image/*"
                        placeholder="Select image"
                        name="image"
                    />
                    &nbsp; &nbsp; Select image
                </label>

                {validationErrors["errors"]["image"] && (
                    <Typography variant="p" className="input-validation-error">
                        {validationErrors["errors"]["image"]}
                    </Typography>
                )}

                {/* Voice Input */}
                <label className="add-event-form-input">
                    <input
                        onChange={(event) => handleValueChange(event, "voice")}
                        className="add-event-form-input"
                        type="file"
                        accept="audio/*"
                        placeholder="Select Voice"
                        name="voice"
                    />
                    &nbsp; &nbsp; Select Voice
                </label>

                {validationErrors["errors"]["voice"] && (
                    <Typography variant="p" className="input-validation-error">
                        {validationErrors["errors"]["voice"]}
                    </Typography>
                )}

                {/* Premium Checkbox */}
                <label className="add-event-form-input">
                    <input
                        onChange={(event) => {
                            const value = event.target.checked ? true : false;
                            handleValueChange(event, "is_premium", value);
                        }}
                        type="checkbox"
                        name="is_premium"
                    />
                    &nbsp; &nbsp; Is Premium
                </label>

                {/* Submit Button */}
                <input
                    className={
                        "add-event-form-input " +
                        (isSubmitting ? "add-event-form-input-disabled" : "")
                    }
                    disabled={isSubmitting}
                    type="submit"
                    value={"Add event"}
                />
            </form>
        </Box>
    );
};

export default EnterNewpremium;
