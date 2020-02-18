import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import  Home from './Home'

describe('Home',()=>{
         
    it('renders the Home  Component', () => {
        const wrapper = mount(<Home />);
        expect(wrapper.find('div').length).toEqual(4);
      });

})