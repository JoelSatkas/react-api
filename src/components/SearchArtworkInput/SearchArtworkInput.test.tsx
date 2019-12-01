import React from 'react';
import ReactDOM from 'react-dom';
import SearchArtworkInput from "./SearchArtworkInput";

const handleSearch = () => {

};

describe('SearchArtworkInput', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SearchArtworkInput search={handleSearch} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });


});


