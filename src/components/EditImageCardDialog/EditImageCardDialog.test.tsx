import React from 'react';
import ReactDOM from 'react-dom';
import EditImageCardDialog from "./EditImageCardDialog";

const handleHide = () => {

};

const handleSave = () => {

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

describe('EditImageCardDialog', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<EditImageCardDialog artist={artist} picture={picture} handleHide={handleHide} handleSave={handleSave} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });


});


