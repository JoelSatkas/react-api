import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

type ImageCardItemProp = {
    picture:IPictureRecord
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
    const classes = useStyles();

    const imageClicked = () => {
        console.log(`image was clicked`)
    };

    const editImage = () => {
        console.log(`edit button clicked`)
    };

    const deleteImage = () => {
        console.log(`delete button clicked`)
    };

    return (
        <Card className={classes.card}>
            <CardActionArea onClick={imageClicked}>
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
                <Button onClick={editImage} size="small" color="primary">
                    Edit
                </Button>
                <Button onClick={deleteImage} size="small" color="secondary">
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};

export default ImageCardItem

