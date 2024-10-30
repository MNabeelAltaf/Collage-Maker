import { useState, useRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Grow from '@mui/material/Grow';


const SnackbarComponent = () => {
  // const [open, setOpen] = useState({
  //   status: false,
  //   message: "",
  //   severity: "",
  // });
  const [open, setOpen] = useState({
    status: true,
    message: "Testing snackbar",
    severity: "success",
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

  return (
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
  )
}

export default SnackbarComponent