import React, {PropsWithChildren} from 'react';
import {ChildrenWrapper, Container, Header} from './style';
import DText from 'components/uiElements/text';
import {MainLayoutProps} from 'types/layouts/mainLayout';
import DRow from 'components/uiElements/row';
import {CloseSvg} from 'assets/svgs';
import {theme} from 'themes/emotion';
import DButton from 'components/uiElements/button';
import {View} from 'react-native';

const MainLayout = (props: PropsWithChildren<MainLayoutProps>) => {
  const {
    children,
    title = '',
    withClose = true,
    withHeader,
    onClosePress = () => {},
  } = props;
  return (
    <Container>
      {withHeader && (
        <Header
          paddingHorizontalRatio={3}
          alignItems="center"
          justifyContent="space-between">
          <DRow fullWidth={false}>
            {withClose && (
              <DButton
                styled="TEXT"
                onPress={onClosePress}
                icon={fill => <CloseSvg fill={theme.colors.button.primary} />}
              />
            )}
          </DRow>
          <DText typography="semiBold16">{title}</DText>
          <DRow fullWidth={false}>
            {<DButton onPress={() => {}} styled="TEXT" title="" />}
          </DRow>
        </Header>
      )}
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Container>
  );
};
export default MainLayout;
