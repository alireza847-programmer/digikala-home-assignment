import MainLayout from 'layouts/mainLayout';
import {texts} from 'locales/en';
import React, {Fragment, useCallback} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {ProductDto} from 'types/apis/products';
import {ErrorWrapper, LoadingWrapper} from './style';
import {theme} from 'themes/emotion';
import DInput from 'components/uiElements/input';
import useProductList from './logic';
import ProductItem from 'components/productItem';

const {products} = texts;

const ProductList = () => {
  const {loading, data, error, fetch, onChangeSearch} = useProductList();
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
  const renderError = useCallback(() => {
    if (error) {
      return (
        <ErrorWrapper>
          <Text>{products.error}</Text>
        </ErrorWrapper>
      );
    }
    return <Fragment />;
  }, [error]);

  const renderListHeader = useCallback(
    () => (
      <View>
        <DInput
          onChangeText={onChangeSearch}
          marginTopRatio={4}
          placeholder={products.searchPlaceHolder}
        />
      </View>
    ),
    [],
  );
  const renderItem = useCallback(
    ({item}: {item: ProductDto}) => <ProductItem item={item} />,
    [data],
  );
  return (
    <MainLayout withHeader withClose={false} title={products.title}>
      {renderLoading()}
      {renderError()}
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
