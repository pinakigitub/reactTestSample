import React from 'react';

import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Home from './components/Home'
import App from './App';


const list = ['a', 'b', 'c'];

describe('App', () => {
  

  test('snapshot renders', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
   it('Home Component  should be rendered in side App Component',()=>{
    const wrapper = mount(<App />);
    expect(wrapper.find(Home).length).toEqual(1);

   })

 
});

