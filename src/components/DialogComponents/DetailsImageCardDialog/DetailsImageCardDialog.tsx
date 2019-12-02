import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

type DetailsImageCardDialogProps = {
    visible: boolean,
    picture: IGraphQLArtwork,
    artist: IGraphQLArtist,
    handleHide: () => void
}

//Basic dialog component for viewing details of the cards data.
const DetailsImageCardDialog = (props: DetailsImageCardDialogProps) => {
    return (
        <div>
            <Dialog open={props.visible} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{props.picture.title} - {props.artist.name}</DialogTitle>
                <DialogContent>
                    <DialogContentText align={"center"}>
                        <img className="images-class" src={props.picture.imageUrl} />
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        disabled
                        fullWidth
                        defaultValue={props.picture.description}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="date"
                        label="Date"
                        disabled
                        fullWidth
                        defaultValue={props.picture.date}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="fileid"
                        label="File ID"
                        disabled
                        fullWidth
                        defaultValue={props.picture.id}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleHide} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DetailsImageCardDialog
