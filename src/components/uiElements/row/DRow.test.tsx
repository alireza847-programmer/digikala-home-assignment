import React, {PropsWithChildren} from 'react';
import {render} from '@testing-library/react-native';
import DRow from './index';
import {ThemeProvider} from '@emotion/react';
import {theme} from 'themes/emotion';
import {RowProps} from 'types/components/uiElements/row';
import {it, describe, expect, jest} from '@jest/globals';

const Component = (props: PropsWithChildren<RowProps>) => (
  <ThemeProvider theme={theme}>
    <DRow {...props}>{props.children}</DRow>
  </ThemeProvider>
);

describe('DRow component', () => {
  it('should match snapshot with default props', () => {
    const {toJSON} = render(<DRow>Content goes here</DRow>);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should match snapshot with custom background color', () => {
    const {toJSON} = render(
      <Component backgroundColor="blue">Blue Background</Component>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should match snapshot with custom styling and justifyContent', () => {
    const {toJSON} = render(
      <Component
        justifyContent="space-between"
        marginTopRatio={1}
        marginLeftRatio={2}>
        Custom Styling
      </Component>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should match snapshot with fullWidth prop', () => {
    const {toJSON} = render(<Component fullWidth>Full Width Row</Component>);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should match snapshot with custom minWidth', () => {
    const {toJSON} = render(
      <Component minWidth={150}>Min Width Row</Component>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
