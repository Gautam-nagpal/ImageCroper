import React from 'react';
import Dialog from '@material-ui/core/Dialog';


function CustomDialog(props) {
    const { onClose, open, children } = props;

    const handleClose = () => {
        onClose(false);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} maxWidth="md">
            {children}
        </Dialog>
    );
}


export default CustomDialog