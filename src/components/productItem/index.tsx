import React from 'react';
import {Container, InfoContainer, ProductImage} from './style';
import {TouchableOpacity} from 'react-native';
import {wp} from 'utils/dimensions';
import {ProductItemProps} from 'types/components/productItem';
import DText from 'components/uiElements/text';
import {PRODUCT_DETAIL} from 'routes/const';
import {useAppNavigation} from 'hooks/navigation';

const ProductItem = (props: ProductItemProps) => {
  const {item} = props;
  const {thumbnail, title, price} = item;
  const navigation = useAppNavigation();
  const onPressItem = () => {
    navigation.navigate(PRODUCT_DETAIL, {
      data: item,
    });
  };
  return (
    <TouchableOpacity onPress={onPressItem} activeOpacity={0.9}>
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
    </TouchableOpacity>
  );
};
export default ProductItem;
