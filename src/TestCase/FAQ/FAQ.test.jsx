import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import FAQTest from './FAQTest' 
import Adapter from '@cfaester/enzyme-adapter-react-18';
Enzyme.configure({ adapter: new Adapter() });
describe('FAQ Component', () => {
    it('should render without throwing an error', () => {
        const wrapper = shallow(<FAQTest />);
        expect(wrapper.find('.heroBanner').exists()).toBeTruthy();
    });

    it('should render the video element', () => {
        const wrapper = shallow(<FAQTest />);
        expect(wrapper.find('video').exists()).toBeTruthy();
    });

    it('should render the "How can we help?" title', () => {
        const wrapper = shallow(<FAQTest />);
        expect(wrapper.find('.h1').text()).toEqual('How can we help ?');
    });

    it('should render a text input field for typing a question', () => {
        const wrapper = shallow(<FAQTest />);
        expect(wrapper.find('.ttextfielsd').exists()).toBeTruthy();
    });

    it('should render recommended topics or issues', () => {
        const wrapper = shallow(<FAQTest />);
        const recommendedText = "Recommended for you : How to sign up for NEXVIEW Plans and  Pricing Can't sign  in to NEXVIEW";
        expect(wrapper.find('.h5').text()).toContain(recommendedText);
    });
});