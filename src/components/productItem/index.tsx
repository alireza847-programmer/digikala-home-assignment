import React from 'react';
import {Container, InfoContainer, ProductImage} from './style';
import {Image} from 'react-native';
import {hp, wp} from 'utils/dimensions';
import {ProductItemProps} from 'types/components/productItem';
import DText from 'components/uiElements/text';

const ProductItem = (props: ProductItemProps) => {
  const {item} = props;
  const {thumbnail, title, price} = item;
  return (
    <Container>
      <ProductImage
        source={{
          uri: thumbnail,
        }}
        resizeMode="center"
      />
      <InfoContainer>
        <DText width={wp(50)} textAlign="left" typography="regular16">
          {title}
        </DText>
        <DText typography="medium15">{price}$</DText>
      </InfoContainer>
    </Container>
  );
};
export default ProductItem;
