// Test cases
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';

describe('App Component', () => {
  it('renders the input fields', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('input1')).toBeTruthy();
    expect(getByTestId('input2')).toBeTruthy();
  });

  it('does not show the button initially', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('submitButton')).toBeNull();
  });

  it('shows the button when both inputs have values', () => {
    const { getByTestId, queryByTestId } = render(<App />);

    fireEvent.changeText(getByTestId('input1'), 'Hello');
    fireEvent.changeText(getByTestId('input2'), 'World');

    expect(queryByTestId('submitButton')).toBeTruthy();
  });

  it('hides the button if one input is cleared', () => {
    const { getByTestId, queryByTestId } = render(<App />);

    fireEvent.changeText(getByTestId('input1'), 'Hello');
    fireEvent.changeText(getByTestId('input2'), 'World');
    fireEvent.changeText(getByTestId('input1'), '');

    expect(queryByTestId('submitButton')).toBeNull();
  });

  it('handles button press', () => {
    const { getByTestId, queryByTestId } = render(<App />);

    fireEvent.changeText(getByTestId('input1'), 'Hello');
    fireEvent.changeText(getByTestId('input2'), 'World');
    fireEvent.press(getByTestId('submitButton'));

    expect(queryByTestId('submitButton')).toBeTruthy();
  });
});
