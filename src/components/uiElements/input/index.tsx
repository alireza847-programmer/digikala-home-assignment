import React from 'react';
import Input from './style';
import {DInputProps} from 'types/components/uiElements/input';
import {theme} from 'themes/emotion';

const DInput = (props: DInputProps) => {
  const {...rest} = props;
  return (
    <Input
      placeholderTextColor={theme.colors.textColor.placeHolder}
      {...rest}
    />
  );
};

export default DInput;
