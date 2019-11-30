import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditImageCardDialog from "./EditImageCardDialog";
import {useState} from "react";
import {toast} from "react-toastify";
import DetailsImageCardDialog from "./DetailsImageCardDialog";

type ImageCardItemProp = {
    picture:IPictureRecord,
    handleDelete: (id: number) => void
}

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

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
                        image={props.picture.baseimageurl}
                        title={props.picture.caption}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.picture.renditionnumber}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            © {props.picture.copyright} - {props.picture.date}
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
            {showPictureEditDialog && <EditImageCardDialog picture={props.picture} handleHide={hideImageEditDialog} handleSave={saveImageDetails} />}
            {showPictureDetailsDialog && <DetailsImageCardDialog picture={props.picture} handleHide={hideImageDetailsDialog}/>}
        </div>
    );
};

export default ImageCardItem

