import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';
import Calculator from '../Calculator/Calculator';

describe('App', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => wrapper = shallow(<App />))

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Calculator Component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  });
});
