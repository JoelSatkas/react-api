import React from 'react';
import ReactDOM from 'react-dom';
import AddNewImageCardDialog from "./AddNewImageCardDialog";

const handleHide = () => {

};

const handleSave = () => {

};

describe('AddNewImageCardDialog', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddNewImageCardDialog handleHide={handleHide} handleSave={handleSave} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    //More
});


