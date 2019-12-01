import React from 'react';
import ReactDOM from 'react-dom';
import DetailsImageCardDialog from "./DetailsImageCardDialog";

const handleHide = () => {

};

const picture: IGraphQLArtwork = {
    date: "",
    description: "",
    id: "",
    imageUrl: "",
    title: ""
};

const artist: IGraphQLArtist = {
    artworks: [],
    name: "",
    nationality: ""
};

describe('DetailsImageCardDialog', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DetailsImageCardDialog artist={artist} picture={picture} handleHide={handleHide}  />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//More
});


