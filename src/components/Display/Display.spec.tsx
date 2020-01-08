import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Display, { DisplayProps } from './Display';

describe('Display', () => {
  let wrapper: ShallowWrapper;
  let props: DisplayProps;

  it('should render a <div />', () => {
    props = { displayValue: '' };
    wrapper = shallow(<Display {...props} />)
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('renders the value of displayValue', () => {
    props = { displayValue: 'test' };
    wrapper = shallow(<Display {...props} />);
    expect(wrapper.text()).toEqual('test');
  });

  it('should render correctly', () => {
    props = { displayValue: '' };
    wrapper = shallow(<Display {...props} />)
    expect(wrapper).toMatchSnapshot();
  });
});
