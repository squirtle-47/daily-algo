import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Algo from '../client/components/Algo.jsx';
import LoginForm from '../client/components/LoginForm.jsx';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('Algo', () => {
    let wrapper;

    const props = {
      title: 'test algo',
      content: 'this is the algorithm description....',
      examples: ['foo', 'bar'],
    };

    beforeAll(() => {
      wrapper = shallow(<Algo {...props} />);
    });

    it('Renders a <span> tag', () => {
      expect(wrapper.type()).toEqual('span');
      expect(wrapper.find('p').text()).toEqual('ex:');
      expect(wrapper.find('h3').text()).toMatch('test algo');
    });
  });

  describe('LoginForm', () => {
    let wrapper;
    let submit; 
    const props = {
      username: 'hooplah',
      password: 'hootenanny',
      logIn: jest.fn(),
    };
  
    beforeAll(() => {
      wrapper = mount(<LoginForm {...props} />);
    });

    it ('LoginForm should login on click', () => {
      wrapper.find('form').simulate('submit');
      expect(props.logIn).toHaveBeenCalled();
    })

  })
});