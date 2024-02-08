import React from 'react';
import Button from './style';
import {DButtonProps} from 'types/components/uiElements/button';
import DText from '../text';
import {theme} from 'themes/emotion';
import DRow from '../row';

const DButton = (props: DButtonProps) => {
  const {
    mode = 'primary',
    subTitle,
    title,
    styled = 'FULL_WIDTH',
    icon,
    rightIcon,
    onPress,
    testID,
    disabled = false,
    width,
  } = props;

  const renderContentColor = () => {
    if (disabled) {
      return theme.colors.textColor.button.disabled;
    }
    if (styled === 'TEXT') {
      return theme.colors.button[mode];
    }
    return theme.colors.textColor.button[mode];
  };

  return (
    <Button
      width={width}
      disabled={disabled}
      testID={testID}
      activeOpacity={0.8}
      onPress={onPress}
      styled={styled}
      mode={mode}>
      {icon && (
        <DRow {...(title && {marginRighRatio: 2})} fullWidth={false}>
          {icon(renderContentColor())}
        </DRow>
      )}
      <DText
        typography="semiBold16"
        color={renderContentColor()}
        marginTopRatio={0}>
        {title}
      </DText>
      {subTitle && (
        <DText
          typography="regular16"
          color={renderContentColor()}
          marginLeftRatio={1.2}
          marginTopRatio={0}>
          {subTitle}
        </DText>
      )}
      {rightIcon && (
        <DRow {...(title && {marginLeftRatio: 2})} fullWidth={false}>
          {rightIcon(renderContentColor())}
        </DRow>
      )}
    </Button>
  );
};
export default DButton;
