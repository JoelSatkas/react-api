import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SearchArtworkInput from "./SearchArtworkInput";

const handleSearch = () => {

};

const placeHolderText: string = 'Test Search';

describe('SearchArtworkInput', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SearchArtworkInput search={handleSearch} placeHolder={placeHolderText} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('snapshot renders', () => {
        const component = renderer.create(<SearchArtworkInput search={handleSearch} placeHolder={placeHolderText} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});


