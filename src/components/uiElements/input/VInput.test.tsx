import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import DInput from './index';
import {it, describe, expect} from '@jest/globals';
import {DInputProps} from 'types/components/uiElements/input';
import {ThemeProvider} from '@emotion/react';
import {theme} from 'themes/emotion';

const Component = (props: DInputProps) => (
  <ThemeProvider theme={theme}>
    <DInput {...props} />
  </ThemeProvider>
);

describe('DInput component', () => {
  it('renders correctly with default props', () => {
    const {toJSON} = render(<Component />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with custom marginTopRatio', () => {
    const {toJSON} = render(<Component marginTopRatio={2} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
