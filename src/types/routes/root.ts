import {PRODUCT_DETAIL, PRODUCT_HOME} from 'routes/const';
import {ProductDto} from 'types/apis/products';

export type RootStackParamList = {
  [PRODUCT_HOME]: undefined;
  [PRODUCT_DETAIL]: {
    data: ProductDto;
  };
};
