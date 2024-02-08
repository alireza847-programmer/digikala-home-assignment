import styled from '@emotion/native';
import {FlatList, View} from 'react-native';
import {hp, wp} from 'utils/dimensions';

export const LoadingWrapper = styled(View)({
  width: wp(100),
  height: hp(86),
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  zIndex: 10,
  backgroundColor: '#a8a8a85a',
});

export const ErrorWrapper = styled(View)({
  width: '100%',
  height: hp(86),
  justifyContent: 'center',
  alignItems: 'center',
});
