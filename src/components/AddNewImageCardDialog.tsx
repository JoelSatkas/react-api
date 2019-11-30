import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

type AddNewImageCardDialogProps = {
    handleHide: () => void,
    handleSave: () => void
}

const AddNewImageCardDialog = (props: AddNewImageCardDialogProps) => {
    return (
        <div>
            <Dialog open={true} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="imageurl"
                        label="Image URL"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="copyright"
                        label="Copy Right"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="caption"
                        label="Caption"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="renditionnumber"
                        label="Rendition Number"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="fileid"
                        label="File ID"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleHide} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={props.handleSave} color="primary">
                        save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddNewImageCardDialog
