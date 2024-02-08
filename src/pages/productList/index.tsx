import MainLayout from 'layouts/mainLayout';
import {texts} from 'locales/en';
import React, {Fragment, useCallback} from 'react';
import {useApi} from 'react-api-wrapper-hook';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {
  GET_PRODUCTS_API_URL,
  ProductDto,
  ProductsDto,
} from 'types/apis/products';
import {LoadingWrapper} from './style';
import {theme} from 'themes/emotion';
import ProductItem from 'components/productItem';
import DInput from 'components/uiElements/input';
import {debounce} from 'lodash';

// I use react-api-wrapper-hook because it's written by me and i want to show my skills

const {products} = texts;
const ProductList = () => {
  const {data, error, fetch, loading} = useApi<ProductsDto>({
    url: GET_PRODUCTS_API_URL,
  });
  const renderLoading = useCallback(() => {
    if (loading) {
      return (
        <LoadingWrapper>
          <ActivityIndicator
            size={'large'}
            color={theme.colors.button.primary}
          />
        </LoadingWrapper>
      );
    }
    return <Fragment />;
  }, [loading]);
  const renderItem = useCallback(
    ({item, index}: {item: ProductDto; index: number}) => (
      <ProductItem item={item} />
    ),
    [data],
  );
  const debounceHandler = useCallback(
    debounce((t: string) => console.log(t), 2000),
    [],
  );
  const onChange = (t: string) => {
    debounceHandler(t);
  };
  const renderListHeader = useCallback(
    () => (
      <View>
        <DInput
          onChangeText={onChange}
          marginTopRatio={4}
          placeholder="Serach Product"
        />
      </View>
    ),
    [],
  );
  return (
    <MainLayout withHeader withClose={false} title={products.title}>
      {renderLoading()}
      <FlatList
        refreshing={loading}
        onRefresh={() => fetch()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderListHeader}
        keyExtractor={item => item.id.toString()}
        data={data?.products}
        renderItem={renderItem}
      />
    </MainLayout>
  );
};
export default ProductList;
