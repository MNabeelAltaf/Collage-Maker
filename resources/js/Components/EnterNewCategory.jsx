import { Box, Typography } from "@mui/material"
import { useEffect } from "react";
import { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const EnterNewevent = ({ addEvent, isSubmitting }) => {

  useEffect(() => {
    // on chaneg, clear form
  }, [isSubmitting])

  const [neweventObj, setNeweventObj] = useState({
    "title": "",
    "description": "",
    "from": "",
    "to": "",
  });

  const [validationErrors, setValidationErrors] = useState({
    isError: false, errors: {}
  });

  const handleValueChange = (event, type) => {
    const newEventToBeAdded = {
      ...neweventObj,
      [type]: event.target.value.trim()
    };
    setNeweventObj(newEventToBeAdded);
  };

  const validate = () => {
    const errors = {};
    let isThereAnyErrors = false;
    if (neweventObj['title'].length < 3) { errors['title'] = "Minimum title lenght shuold be 3"; isThereAnyErrors = true; }
    if (neweventObj['description'].length < 5) { errors['description'] = "Minimum description lenght shuold be 5"; isThereAnyErrors = true; }
    if (neweventObj['from'].length == 0) { errors['from'] = "From date requried"; isThereAnyErrors = true; }
    if (neweventObj['to'].length == 0) { errors['to'] = "To date requried"; isThereAnyErrors = true; }
    if (neweventObj['from'].length > 0 && neweventObj['to'].length > 0 && new Date(neweventObj['from']) > new Date(neweventObj['to'])) { errors['date'] = "Date is not correct"; isThereAnyErrors = true; }
    if (isThereAnyErrors)
      setValidationErrors({ isError: true, errors })
    return isThereAnyErrors;
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!validate()) {
      setValidationErrors({ isError: false, errors: {} })
      addEvent(event, neweventObj);
    }
  }

  return (
    <Box sx={{ width: "30%", display: "flex", flexDirection: "column" }}>
      <Typography variant={'h5'} marginBottom={'20px'}>Create</Typography>
      <form style={{ display: "flex", flexDirection: "column" }}
        action="" id="create-event-form" onSubmit={onFormSubmit}
      >
        <input onChange={(event) => { handleValueChange(event, 'title') }} className="add-event-form-input" type="text" placeholder="Enter event title" name="title" />
        {validationErrors['errors']['title'] && <Typography variant="p" className="input-validation-error">{validationErrors['errors']['title']}</Typography>}
        <input onChange={(event) => { handleValueChange(event, 'description') }} className="add-event-form-input" type="text" placeholder="Enter event description" name="description" />
        {validationErrors['errors']['description'] && <Typography variant="p" className="input-validation-error">{validationErrors['errors']['description']}</Typography>}
        <input onChange={(event) => { handleValueChange(event, 'from') }} className="add-event-form-input" type="date" placeholder="From" name="from" />
        {validationErrors['errors']['from'] && <Typography variant="p" className="input-validation-error">{validationErrors['errors']['from']}</Typography>}
        <input onChange={(event) => { handleValueChange(event, 'to') }} className="add-event-form-input" type="date" placeholder="To" name="to" />
        {validationErrors['errors']['to'] && <Typography variant="p" className="input-validation-error">{validationErrors['errors']['to']}</Typography>}
        {validationErrors['errors']['date'] && <Typography variant="p" className="input-validation-error">{validationErrors['errors']['date']}</Typography>}
        <input className={"add-event-form-input " + (isSubmitting ? "add-event-form-input-disabled" : "")}
          disabled={isSubmitting}
          type="submit" value={"Add event"} />
      </form>
    </Box>
  )
}

export default EnterNewevent;
