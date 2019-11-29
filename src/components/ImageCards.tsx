import * as React from 'react';
import ImageCardItem from './ImageCardItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

type ImageCardsProp = {
    pictures: Array<IPictureRecord>
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
    const classes = useStyles();
    return (
        <div>
            <h1>Image List</h1>
            <div>
                <Grid container className={classes.root} spacing={3}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={3}>
                            {props.pictures.map((picture: IPictureRecord) => (
                                <Grid key={picture.id} item>
                                    <ImageCardItem key={picture.id} picture={picture} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default ImageCards;
