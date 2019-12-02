import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditImageCardDialog from "../DialogComponents/EditImageCardDialog/EditImageCardDialog";
import {useState} from "react";
import {toast} from "react-toastify";
import DetailsImageCardDialog from "../DialogComponents/DetailsImageCardDialog/DetailsImageCardDialog";

type ImageCardItemProp = {
    picture:IGraphQLArtwork,
    artist: IGraphQLArtist,
    handleDelete: (id: string) => void
}

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

//Component responsible for managing the cards content.
const ImageCardItem = (props: ImageCardItemProp) => {
    const [showPictureEditDialog, setShowPictureEditDialog] = useState(false);
    const [showPictureDetailsDialog, setShowPictureDetailsDialog] = useState(false);

    const classes = useStyles();

    const showImageDetails = () => {
        setShowPictureDetailsDialog(true);
    };

    const showImageEdit = () => {
        setShowPictureEditDialog(true);
    };

    const deleteImage = () => {
        props.handleDelete(props.picture.id);
    };

    const hideImageEditDialog = () => {
        setShowPictureEditDialog(false);
    };

    const hideImageDetailsDialog = () => {
        setShowPictureDetailsDialog(false);
    };

    const saveImageDetails = () => {
        setShowPictureEditDialog(false);
        toast.error("This is just a demo! Did not save", {
            position: toast.POSITION.BOTTOM_LEFT
        });
    };

    return (
        <div>
            <Card className={classes.card}>
                <CardActionArea onClick={showImageDetails}>
                    <CardMedia
                        className={classes.media}
                        image={props.picture.imageUrl}
                        title={props.picture.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.picture.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Artist: {props.artist.name} ({props.artist.nationality})
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.picture.date}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={showImageEdit} size="small" color="primary">
                        Edit
                    </Button>
                    <Button onClick={deleteImage} size="small" color="secondary">
                        Delete
                    </Button>
                </CardActions>
            </Card>
            <EditImageCardDialog picture={props.picture} artist={props.artist} handleHide={hideImageEditDialog} handleSave={saveImageDetails} visible={showPictureEditDialog} />
            <DetailsImageCardDialog picture={props.picture} artist={props.artist} handleHide={hideImageDetailsDialog} visible={showPictureDetailsDialog}/>
        </div>
    );
};

export default ImageCardItem

