import React from 'react';
import ReactDOM from 'react-dom';
import ImageCardItem from "./ImageCardItem";

const handleDelete = () => {

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

describe('ImageCardItem', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ImageCardItem artist={artist} picture={picture} handleDelete={handleDelete} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });


});


