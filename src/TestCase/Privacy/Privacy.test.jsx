import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
Enzyme.configure({ adapter: new Adapter() });
import PrivacyTest from './PrivacyTest';

describe('Privacy', () => {
    it('should render without throwing an error', () => {
        const wrapper = shallow(<PrivacyTest />);
        expect(wrapper.find('.container').exists()).toBeTruthy();
    });

    it('should contain a header with "Help Center"', () => {
        const wrapper = shallow(<PrivacyTest />);
        expect(wrapper.find('header').exists()).toBeTruthy();
        expect(wrapper.find('header').find('h1').text()).toEqual('Help Center');
    });

    it('should contain a section with specific content', () => {
        const wrapper = shallow(<PrivacyTest />);
        expect(wrapper.find('section').exists()).toBeTruthy();
        expect(wrapper.find('section').find('h3').text()).toEqual('Wait time for live help is longer than usual');
        expect(wrapper.find('section').find('p').text()).toEqual('Check back later, or search our Help Center for answers.');
    });

    it('should contain "Privacy Statement" header', () => {
        const wrapper = shallow(<PrivacyTest />);
        const headers = wrapper.find('h1.fontts');
        let found = false;
        headers.forEach(header => {
            if (header.text() === 'Privacy Statement') {
                found = true;
            }
        });
        expect(found).toBeTruthy();
    });
    

    it('should contain Contacting Us and Use of Information sections', () => {
        const wrapper = shallow(<PrivacyTest />);
        expect(wrapper.find('div').find('h4.fontts').at(0).text()).toEqual('Contacting Us');
        expect(wrapper.find('div').find('h4.fontts').at(1).text()).toEqual('Use of Information');
    });
});
