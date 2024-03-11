import React from 'react';
import { shallow } from 'enzyme';
import TermsOfUseTest from './TermsOfUseTest';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
Enzyme.configure({ adapter: new Adapter() });

describe('TermsOfUseTest', () => {
    it('should render without throwing an error', () => {
        const wrapper = shallow(<TermsOfUseTest />);
        expect(wrapper.find('.container').exists()).toBeTruthy();
    });

    it('should contain a header with "Help Center"', () => {
        const wrapper = shallow(<TermsOfUseTest />);
        expect(wrapper.find('header').exists()).toBeTruthy();
        expect(wrapper.find('header').find('h1').text()).toEqual('Help Center');
    });

    it('should contain a section with specific content', () => {
        const wrapper = shallow(<TermsOfUseTest />);
        expect(wrapper.find('section').exists()).toBeTruthy();
        expect(wrapper.find('section').find('h3').text()).toEqual('Wait time for live help is longer than usual');
        expect(wrapper.find('section').find('p').text()).toEqual('Check back later, or search our Help Center for answers.');
    });

    it('should contain "NEXVIEW Terms of Use" header', () => {
      const wrapper = shallow(<TermsOfUseTest />);
      const headers = wrapper.find('h1.fontts');
      let found = false;
      headers.forEach(header => {
          if (header.text() === 'NEXVIEW Terms of Use') {
              found = true;
          }
      });
      expect(found).toBeTruthy();
  });
  

    it('should contain membership and billing sections', () => {
        const wrapper = shallow(<TermsOfUseTest />);
        expect(wrapper.find('div').find('h4.fontts').at(0).text()).toEqual('1. Membership');
        expect(wrapper.find('div').find('h4.fontts').at(1).text()).toEqual('2. Billing and Cancellation');
    });
});
