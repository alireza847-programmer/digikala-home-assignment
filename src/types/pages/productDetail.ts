import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'types/routes/root';

export type ProductDetailProps = NativeStackScreenProps<
  RootStackParamList,
  'productDetail'
>;
