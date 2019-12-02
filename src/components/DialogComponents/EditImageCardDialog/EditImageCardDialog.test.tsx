import React from 'react';
import ReactDOM from 'react-dom';
import { mount, configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EditImageCardDialog from "./EditImageCardDialog";
import {Button} from "@material-ui/core";

configure({ adapter: new Adapter() });

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

    it('should handle button click', () => {
        const handleSaveMock = jest.fn();
        const handleHideMock = jest.fn();

        const output = mount(
            <EditImageCardDialog artist={artist} picture={picture} handleHide={handleHideMock} handleSave={handleSaveMock} />
        );

        output.find(Button).first().simulate('click');
        expect(handleHideMock).toHaveBeenCalled();

        output.find(Button).last().simulate('click');
        expect(handleSaveMock).toHaveBeenCalled();
    });
});


