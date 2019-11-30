import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

type ImageCardItemDetailsProps = {
    picture: IPictureRecord,
    handleHide: () => void,
    handleSave: () => void
}

const ImageCardItemDetails = (props: ImageCardItemDetailsProps) => {
    return (
        <div>
            <Dialog open={true} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <img className="images-class" src={props.picture.baseimageurl} />
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="copyright"
                        label="Copy Right"
                        fullWidth
                        defaultValue={props.picture.copyright}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="caption"
                        label="Caption"
                        fullWidth
                        defaultValue={props.picture.caption}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="renditionnumber"
                        label="Rendition Number"
                        fullWidth
                        defaultValue={props.picture.renditionnumber}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="fileid"
                        label="File ID"
                        fullWidth
                        defaultValue={props.picture.fileid}
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

export default ImageCardItemDetails
