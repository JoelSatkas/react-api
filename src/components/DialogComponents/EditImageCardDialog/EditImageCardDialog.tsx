import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

type ImageCardItemDetailsProps = {
    /** Switch for displaying or hiding dialog */
    visible: boolean,
    /** The picture data to display */
    picture: IGraphQLArtwork,
    /** The data of the artist responsible for the picture */
    artist: IGraphQLArtist,
    /** The parents method for handling hiding the component */
    handleHide: () => void,
    /** The parents method for handling saving the component */
    handleSave: () => void
}

/*
    This is basically the same as DetailsImageCardDialog but with the fields editable.
    These components could be merged into one and reused by passing an editable flag from the parent
    but there could be components you want to not be editable but be displayable or vise versa.
 */

/**
 *  Basic dialog component for editing the data of the card.
 */
const EditImageCardDialog = (props: ImageCardItemDetailsProps) => {
    return (
        <div>
            <Dialog open={props.visible} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <DialogContentText align={"center"}>
                        <img className="images-class" src={props.picture.imageUrl} />
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Title"
                        label="Title"
                        fullWidth
                        defaultValue={props.picture.title}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="artist"
                        label="Artist"
                        fullWidth
                        defaultValue={props.artist.name}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        fullWidth
                        defaultValue={props.picture.description}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="date"
                        label="Date"
                        fullWidth
                        defaultValue={props.picture.date}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="fileid"
                        label="File ID"
                        fullWidth
                        defaultValue={props.picture.id}
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

export default EditImageCardDialog
