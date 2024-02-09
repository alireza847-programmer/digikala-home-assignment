import {useCallback} from 'react';
import {useApi} from 'react-api-wrapper-hook';
import {
  GET_PRODUCTS_API_URL,
  GET_PRODUCTS_WITH_SEARCH_API_URL,
  ProductsDto,
} from 'types/apis/products';
import {debounce} from 'lodash';
// I use react-api-wrapper-hook because it's written by me and i want to show my skills

const useProductList = () => {
  const {data, error, fetch, loading} = useApi<ProductsDto>({
    url: GET_PRODUCTS_API_URL,
  });
  const debounceHandler = useCallback(
    debounce(
      (t: string) =>
        fetch({
          url: `${GET_PRODUCTS_WITH_SEARCH_API_URL}?q=${t}`,
        }),
      700,
    ),
    [],
  );
  const onChangeSearch = (t: string) => {
    debounceHandler(t);
  };
  return {data, error, fetch, loading, onChangeSearch};
};
export default useProductList;
