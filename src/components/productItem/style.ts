import styled from '@emotion/native';
import DRow from 'components/uiElements/row';
import {Image, View} from 'react-native';
import {theme} from 'themes/emotion';
import {wp} from 'utils/dimensions';

export const Container = styled(DRow)(({theme}) => ({
  backgroundColor: theme.colors.button.secondary,
  width: '100%',
  marginTop: wp(5),
  paddingLeft: theme.HorizontalRem * 3,
  borderRadius: theme.radius * 2,
  elevation: 2,
}));

export const ProductImage = styled(Image)({
  width: wp(30),
  height: wp(25),
});

export const InfoContainer = styled(View)({
  marginLeft: theme.HorizontalRem * 5,
  alignItems: 'flex-start',
});
