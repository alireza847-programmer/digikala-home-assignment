import MainLayout from 'layouts/mainLayout';
import {texts} from 'locales/en';
import React, {useRef} from 'react';
import {ProductDetailProps} from 'types/pages/productDetail';
import {hp, wp} from 'utils/dimensions';
import {Animated, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel-v4';
import DRow from 'components/uiElements/row';
import DText from 'components/uiElements/text';
import {theme} from 'themes/emotion';
import DButton from 'components/uiElements/button';
import {useAppNavigation} from 'hooks/navigation';
import {useFocusEffect} from '@react-navigation/native';

const {productDetail} = texts;
const ProductDetail = (props: ProductDetailProps) => {
  const {route} = props;
  const {data} = route.params;
  const navigation = useAppNavigation();
  const animatedRef = useRef(new Animated.Value(hp(100))).current;
  const carouselRef = useRef<Carousel<string>>(null);
  useFocusEffect(() => {
    Animated.timing(animatedRef, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(result => {
      if (result.finished) {
        carouselRef.current?.snapToNext();
      }
    });
  });
  return (
    <MainLayout
      onClosePress={() => navigation.goBack()}
      withHeader
      withClose
      title={productDetail.title}>
      <Animated.View style={{transform: [{translateY: animatedRef}]}}>
        <DRow marginTopRatio={4}>
          <Carousel
            ref={carouselRef}
            vertical={false}
            itemWidth={wp(88)}
            sliderWidth={wp(88)}
            data={data.images}
            renderItem={data => {
              return (
                <Image
                  resizeMode="stretch"
                  style={{width: wp(88), height: hp(30)}}
                  source={{uri: data.item}}
                />
              );
            }}
          />
        </DRow>
        <DText marginTopRatio={3} typography="semiBold18">
          {data.title}
        </DText>
        <DText
          color={theme.colors.textColor.primary}
          textAlign="left"
          marginTopRatio={3}
          typography="regular16">
          {data.description}
        </DText>
        <DRow marginTopRatio={5}>
          <DButton
            onPress={() => {}}
            title="Add To Cart"
            subTitle={`${data.price}$`}
          />
        </DRow>
      </Animated.View>
    </MainLayout>
  );
};
export default ProductDetail;
