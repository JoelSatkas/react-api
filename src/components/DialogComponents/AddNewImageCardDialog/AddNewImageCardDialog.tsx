import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

type AddNewImageCardDialogProps = {
    /** Switch for displaying or hiding dialog */
    visible: boolean,
    /** The parents method for handling hiding the component */
    handleHide: () => void,
    /** The parents method for handling saving the component */
    handleSave: () => void
}

/**
 *  Basic dialog component for adding new card.
 */
const AddNewImageCardDialog = (props: AddNewImageCardDialogProps) => {
    return (
        <div>
            <Dialog open={props.visible} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add New Artwork</DialogTitle>
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
                        id="title"
                        label="Title"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="artistname"
                        label="Artist Name"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="date"
                        label="Date"
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
