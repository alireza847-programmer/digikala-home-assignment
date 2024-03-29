import styled from '@emotion/native';
import VRow from 'components/uiElements/row';
import {hp, wp} from 'utils/dimensions';

export const Container = styled.View(({theme}) => ({
  width: '100%',
}));

export const Header = styled(VRow)(({theme}) => ({
  width: wp(100),
  shadowColor: 'rgba(68, 80, 95, 0.20)',
  shadowOpacity: 1,
  shadowOffset: {
    height: 0,
    width: 0,
  },
  backgroundColor: theme.colors.backgroundColor,
  height: hp(8),
  alignItems: 'center',
  elevation: 10,
}));

export const ChildrenWrapper = styled.View(({theme}) => ({
  paddingHorizontal: theme.HorizontalRem * 4,
}));
