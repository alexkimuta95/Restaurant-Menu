import React from 'react';
import Enzyme, {shallow, mount} from "enzyme";

import MenuItemGroup from './MenuItemGroup';

import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({adapter: new Adapter()});

const createProps = props => ({
    name: 'Comment Feed',
    choices:[],
    related:[],
    level: 1,
    type: 'choices',
    menuItemChecked:false,
    choiceChecked:false,
    path: 'Bread',
    onCheckMenuItem: jest.fn(),
    ...props
});

describe("Menu Item Group component", () => {
    // Test to see if MenuItem renders
    test("renders", () => {
        let props = createProps();

        const wrapper = shallow(<MenuItemGroup {...props}/>);

        expect(wrapper.exists()).toBe(true);
    });

    // Test to see if the app doesnt break when choices = undefined
    test("doesnt break without choices", () => {
        const wrapper = shallow(<MenuItemGroup/>);

        wrapper.setProps({choices: undefined});

        expect(wrapper.find(".choices-on-menu")).toHaveLength(0);

    });

    // Test to see if the app doesnt break when choices = []
    test("doesnt break with an empty array of choices", () => {
        const wrapper = shallow(<MenuItemGroup/>);

        wrapper.setProps({choices: []});

        expect(wrapper.find(".choices-on-menu")).toHaveLength(0);

    });

    // Test to see if the app doesnt break when related = undefined
    test("doesnt break without related items", () => {
        const wrapper = shallow(<MenuItemGroup/>);

        wrapper.setProps({related: undefined});

        expect(wrapper.find(".related-items-on-menu")).toHaveLength(0);

    });

    // Test to see if the app doesnt break when related = []
    test("doesnt break with an empty array of related items", () => {
        const wrapper = shallow(<MenuItemGroup/>);

        wrapper.setProps({related: []});

        expect(wrapper.find(".related-items-on-menu")).toHaveLength(0);

    });

    // Test to see if choices will be visible if a menu item hasn't been selected
    test("presence of choices if menu item isn't checked ", () => {
        const wrapper = shallow(<MenuItemGroup/>);

        wrapper.setProps({menuItemChecked: false});

        expect(wrapper.find(".related-items-on-menu")).toHaveLength(0);

    });

    // Test to see if related items will be visible if a choice hasn't been selected
    test("presence of related items if choice isn't checked ", () => {
        const wrapper = shallow(<MenuItemGroup/>);

        wrapper.setProps({choiceChecked: false});

        expect(wrapper.find(".related-items-on-menu")).toHaveLength(0);

    });

});