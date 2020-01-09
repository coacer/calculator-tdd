import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Calculator from './Calculator';
import Display, { DisplayProps } from '../Display/Display';
import Keypad from '../Keypad/Keypad'

describe('Calculator', () => {
  let wrapper: ShallowWrapper;
  let displayProps: DisplayProps;

  beforeEach(() => wrapper = shallow(<Calculator />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Display and Keypad Components', () => {
    displayProps = { displayValue: '0' };

    expect(wrapper.containsMatchingElement(<Display {...displayProps} />)).toEqual(true);
    // containsMatchingElementだと関数がマッチしないためエラーになる
    expect(wrapper.find(Keypad).length).toEqual(1);
  });
});

