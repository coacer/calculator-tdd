import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import Calculator from './Calculator';
import Display, { DisplayProps } from '../Display/Display';
import Keypad, { KeypadProps } from '../Keypad/Keypad'

describe('Calculator', () => {
  let wrapper: ShallowWrapper;
  let displayProps: DisplayProps;
  let keypadProps: KeypadProps;

  beforeEach(() => wrapper = shallow(<Calculator />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Display and Keypad Components', () => {
    displayProps = { displayValue: '0' };
    keypadProps = {
      numbers: [],
      operators: [],
      callOperator: (): void => {},
      setOperator: (): void => {},
      updateDisplay: (): void => {},
    };

    expect(wrapper.containsAllMatchingElements([
      <Display {...displayProps} />,
      <Keypad {...keypadProps} />,
    ])).toEqual(true);
  });
});

