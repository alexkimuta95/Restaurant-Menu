import React from 'react';
import Enzyme, {shallow, mount} from "enzyme";

import MenuItem from './MenuItem';

import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({adapter: new Adapter()});

const createProps = props => ({
    name: 'Soup',
    level: 1,
    path: 'Bread',
    type: 'choices',
    onCheckMenuItem: jest.fn(),
    ...props
});

describe("Menu Item component", () => {
    // Test to see if menu item renders
    test("renders", () => {
        let props = createProps();

        const wrapper = shallow(<MenuItem {...props}/>);

        expect(wrapper.exists()).toBe(true);
    });

    // Test to see value on Change
    test("checkbox on change", () => {
        let props = createProps();

        const wrapper = shallow(<MenuItem onCheckMenuItem={()=>{}} {...props}/>);

        wrapper.find("input").simulate("change");

        expect(wrapper.find("input").props().value).toEqual("Soup");
    });


});