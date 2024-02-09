import React from 'react';
import {render} from '@testing-library/react-native';
import DButton from './index';
import {it, describe, expect} from '@jest/globals';
import {DButtonProps} from 'types/components/uiElements/button';
import {ThemeProvider} from '@emotion/react';
import {theme} from 'themes/emotion';

// A wrapper component to provide the theme context to DButton
const Component = (props: DButtonProps) => (
  <ThemeProvider theme={theme}>
    <DButton {...props} />
  </ThemeProvider>
);

describe('DButton component', () => {
  it('renders correctly with default props', () => {
    // Arrange
    const {toJSON} = render(<Component onPress={() => {}} />);

    // Assert
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with custom title and mode', () => {
    // Arrange
    const {toJSON} = render(
      <Component onPress={() => {}} title="Click me" mode="secondary" />,
    );

    // Assert
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with custom styled prop', () => {
    // Arrange
    const {toJSON} = render(
      <Component title="Click Me" onPress={() => {}} styled="CONTENT_SIZE" />,
    );

    // Assert
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly with custom icon and rightIcon', () => {
    // Arrange
    const MockIcon = () => <svg>Mock Icon</svg>;
    const {toJSON} = render(
      <Component
        onPress={() => {}}
        icon={() => <MockIcon />}
        rightIcon={() => <MockIcon />}
      />,
    );

    // Assert
    expect(toJSON()).toMatchSnapshot();
  });
});
