import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
Enzyme.configure({ adapter: new Adapter() });
import AboutTest from './AboutTest';
import AboutExtraTest from './AboutExtraTest';

describe('About Component', () => {
    it('should render without throwing an error', () => {
        const wrapper = shallow(<AboutTest />);
        expect(wrapper.find('.heroBanner').exists()).toBeTruthy();
    });

    it('should render the AboutExtra component', () => {
        const wrapper = shallow(<AboutTest />);
        expect(wrapper.find(AboutExtraTest).exists()).toBeTruthy();
    });

    it('should render the video element', () => {
        const wrapper = shallow(<AboutTest />);
        expect(wrapper.find('video').exists()).toBeTruthy();
    });

    it('should render the "Watch Now" title', () => {
        const wrapper = shallow(<AboutTest />);
        expect(wrapper.find('.title').text()).toEqual('Watch Now');
    });

    it('should render the content in the heroBanner', () => {
        const wrapper = shallow(<AboutTest />);
        expect(wrapper.find('.heroBannerContent').exists()).toBeTruthy();
    });

    it('should render a button linking to "/home"', () => {
        const wrapper = shallow(<AboutTest />);
        expect(wrapper.find('NavLink').prop('to')).toEqual('/home');
    });
});

describe('AboutExtra Component', () => {
    it('should render without throwing an error', () => {
        const wrapper = shallow(<AboutExtraTest />);
        expect(wrapper.find('.main').exists()).toBeTruthy();
    });

    it('should render the "Unlimited movies, TV shows, and more" text', () => {
        const wrapper = shallow(<AboutExtraTest />);
        expect(wrapper.find('h1').at(0).text()).toEqual('Unlimited movies, TV shows, and more.');
    });

    it('should render the "Enjoy on your TV" section', () => {
        const wrapper = shallow(<AboutExtraTest />);
        expect(wrapper.find('.container1').at(0).exists()).toBeTruthy();
    });

    it('should render the "Download your shows to watch on the go" section', () => {
        const wrapper = shallow(<AboutExtraTest />);
        expect(wrapper.find('.container1').at(1).exists()).toBeTruthy();
    });

    it('should render the "Watch everywhere" section', () => {
        const wrapper = shallow(<AboutExtraTest />);
        expect(wrapper.find('.container1').at(2).exists()).toBeTruthy();
    });

    it('should render the "Frequently Asked Questions" section', () => {
        const wrapper = shallow(<AboutExtraTest />);
        expect(wrapper.find('.question').exists()).toBeTruthy();
    });

    it('should render a button for a 30-day free trial', () => {
        const wrapper = shallow(<AboutExtraTest />);
        expect(wrapper.find('.try1').exists()).toBeTruthy();
    });
});
