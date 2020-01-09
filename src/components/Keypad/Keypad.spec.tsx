import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import sinon from 'sinon';
import Keypad from './Keypad';

describe('Keypad', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Keypad
        callOperator={sinon.stub()}
        numbers={[]}
        operators={[]}
        setOperator={sinon.stub()}
        updateDisplay={sinon.stub()}
      />
    );
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
})
