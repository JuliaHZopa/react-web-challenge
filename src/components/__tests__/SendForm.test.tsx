import * as React from "react";
import * as renderer from "react-test-renderer";
import { Provider } from "react-redux";
import initialState from "../../initialState";
import SendForm from "../SendForm";
import configureStore from 'redux-mock-store';

const middlewares: any = []
const mockStore = configureStore(middlewares)

const store = mockStore(initialState);

describe('SendForm', () => {
  test('it renders', () => {
    const render = renderer.create(<Provider store={store}><SendForm /></Provider>).toJSON();
    expect(render).toMatchSnapshot();
  });

  test('it calls handleOnChange on form change', () => {
    // TODO: write test
  });

  test('it calls updateTransactionData on form change', () => {
    // TODO: write test
  });

  test('it calls ValidateField with field name and value', () => {
    // TODO: write test
  });

  test('ValidateField returns an object containing a key and a value', () => {
    // TODO: write test
  });

  test('it calls updateErrors with an object containing a key and a value', () => {
    // TODO: write test
  });

  test('it calls handleOnClick when the submit button is clicked', () => {
    // TODO: write test
  });

  test('it calls isFormValid when handleOnClick is called', () => {
    // TODO: write test
  });

  test('it calls makeTransaction if handleOnClick is called and the form is valid', () => {
    // TODO: write test
  });

  test('it calls resets the form if handleOnClick is called and the form is valid', () => {
    // TODO: write test
  });

  test('it returns false if isFormValid is called without a state', () => {
    // TODO: write test
  });

  test('it returns true if isFormValid is called and the form is valid', () => {
    // TODO: write test
  });

  test(`it returns false if isFormValid is called and this.state.erros is undefined`, () => {
    // TODO: write test
  });

  test('it returns false isFormValid is called and form is invalid', () => {
    // TODO: write test
  });
})
