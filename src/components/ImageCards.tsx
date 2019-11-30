import * as React from 'react';
import ImageCardItem from './ImageCardItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Button} from "@material-ui/core";
import {useState} from "react";
import AddNewImageCardDialog from "./AddNewImageCardDialog";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ImageCardsProp = {
    pictures: Array<IPictureRecord>,
    deleteImage: (imageId: number) => void
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

const ImageCards = (props: ImageCardsProp) => {
    const [showAddDialog, setShowAddDialog] = useState(false);

    const classes = useStyles();

    const addButtonClicked = () => {
        setShowAddDialog(true);
    };

    const hideAddDialog = () => {
        setShowAddDialog(false);
    };

    const uploadNewItem = () => {
        setShowAddDialog(false);
        toast.error("This is just a demo! Did not submit", {
            position: toast.POSITION.BOTTOM_LEFT
        });
    };

    const handleImageDelete = (id: number) => {
        console.log("Delete image with id: " + id);
        props.deleteImage(id);
    };

    return (
        <div>
            <h1 style={{textAlign:"center"}}>Image List</h1>
            <div>
                <Grid container className={classes.root} spacing={3}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={3}>
                            {props.pictures.map((picture: IPictureRecord) => (
                                <Grid key={picture.id} item>
                                    <ImageCardItem key={picture.id} picture={picture} handleDelete={handleImageDelete} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <Button className='add-button' variant="contained" onClick={addButtonClicked}>
                Add New Item
            </Button>
            {showAddDialog && <AddNewImageCardDialog handleSave={uploadNewItem} handleHide={hideAddDialog} />}
            <ToastContainer />
        </div>
    );
};

export default ImageCards;
