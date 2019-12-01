import * as React from 'react';
import ImageCardItem from '../ImageCardItem/ImageCardItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Button} from "@material-ui/core";
import {useState} from "react";
import AddNewImageCardDialog from "../AddNewImageCardDialog/AddNewImageCardDialog";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {gql} from "apollo-boost";
import {useApolloClient, useQuery} from "@apollo/react-hooks";
import SearchArtworkInput from "../SearchArtworkInput/SearchArtworkInput";

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

const GET_IMAGES_QUERY = gql`
    {
        popular_artists(size: 5) {
            artists {
                name
                nationality
                artworks (size: 2) {
                    id
                    date
                    imageUrl
                    title
                    description
                }
            }
        }
    }
`;

const ImageCards = () => {
    const [showAddDialog, setShowAddDialog] = useState(false);
    let loading: boolean, error: any | undefined, data: any | undefined;
    ({loading, error, data} = useQuery(GET_IMAGES_QUERY));

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

    const handleImageDelete = (id: string) => {
        console.log("Delete image with id: " + id);

        // //TODO Figure out how to use state instead of this.
        // data = {popular_artists: {artists: data.popular_artists.artists.map((artist: IGraphQLArtist) => {
        //     return artist.artworks.filter((artwork: IGraphQLArtwork) => {
        //         return artwork.id !== id;
        //     });
        // })}};

        toast.error("This is just a demo! Did not delete", {
            position: toast.POSITION.BOTTOM_LEFT
        });
    };

    const searchForArtWork = (searchQuery: string) => {
        // const client = useApolloClient();
        // const data = client.query({
        //     query: gql``
        // });

    };

    if (error) return (<div>
        <p>
            Something went wrong with the server.... Please try again later.
        </p>
    </div>);

    if (data === undefined) return (<div>
        <p>
            Loading...
        </p>
    </div>);
    else return (
        <div>
            <h1 style={{textAlign:"center"}}>Popular Artists and their work</h1>
            <SearchArtworkInput search={searchForArtWork}/>
            <div>
                <Grid container className={classes.root} spacing={3}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={3}>
                            {data.popular_artists.artists.map((artist: any) => {
                                return artist.artworks.map((artWork: IGraphQLArtwork) => (
                                    <Grid key={artWork.id} item>
                                        <ImageCardItem key={artWork.id} picture={artWork} artist={artist} handleDelete={handleImageDelete} />
                                    </Grid>
                                ));
                            })}
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
