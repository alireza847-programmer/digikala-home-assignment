import {TextInputProps} from 'react-native';

export interface InputProps {
  marginTopRatio?: number;
}

export interface DInputProps extends InputProps, TextInputProps {}
