import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Menu from './App';
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({adapter: new Adapter()});


describe("Menu component", () => {
    // Test if the component renders
    test("renders", () => {
        const wrapper = shallow(<Menu/>);

        expect(wrapper.exists()).toBe(true);
    });

    // Test to see if the app doesnt break when menuList = undefined
    test("doesnt break without menu data", () => {
        const wrapper = shallow(<Menu/>);

        wrapper.setState({menuList: undefined});

        expect(wrapper.find(".menu-list-group")).toHaveLength(0);

    });

    // Test to see if the app doesnt break when menuList = []
    test("doesnt break with an empty array of menu data", () => {
        const wrapper = shallow(<Menu/>);

        wrapper.setState({menuList: []});

        expect(wrapper.find(".menu-list-group")).toHaveLength(0);

    });
});