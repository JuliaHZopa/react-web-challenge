import * as React from 'react';
import * as renderer from "react-test-renderer";
import Field from '../Field';

const handleOnChangeMock = jest.fn();

describe('Field', () => {
  test('it renders', () => {
    const render = renderer.create(
      <Field
        type='text'
        name='fieldName'
        value=''
        handleOnChange={handleOnChangeMock}
        label='Label'/>).toJSON();
    expect(render).toMatchSnapshot();
  });
});
