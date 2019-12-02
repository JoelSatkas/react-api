import React from 'react';
import ReactDOM from 'react-dom';
import { mount, configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DetailsImageCardDialog from "./DetailsImageCardDialog";
import {Button} from "@material-ui/core";

configure({ adapter: new Adapter() });

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

    it('should handle button click', () => {
        const handleHideMock = jest.fn();

        const output = mount(
            <DetailsImageCardDialog artist={artist} picture={picture} handleHide={handleHideMock} />
        );

        output.find(Button).first().simulate('click');
        expect(handleHideMock).toHaveBeenCalled();
    });
});


