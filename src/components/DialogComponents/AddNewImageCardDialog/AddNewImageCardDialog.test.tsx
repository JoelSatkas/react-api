import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow, configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddNewImageCardDialog from "./AddNewImageCardDialog";
import {Button} from "@material-ui/core";

configure({ adapter: new Adapter() });

const handleHide = () => {

};

const handleSave = () => {

};

const visible = true;

describe('AddNewImageCardDialog', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddNewImageCardDialog handleHide={handleHide} handleSave={handleSave} visible={visible} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should handle button click', () => {
        const handleSaveMock = jest.fn();
        const handleHideMock = jest.fn();

        const output = mount(
            <AddNewImageCardDialog handleHide={handleHideMock} handleSave={handleSaveMock} visible={visible} />
        );

        output.find(Button).first().simulate('click');
        expect(handleHideMock).toHaveBeenCalled();

        output.find(Button).last().simulate('click');
        expect(handleSaveMock).toHaveBeenCalled();
    });
});


