import MainLayout from 'layouts/mainLayout';
import {texts} from 'locales/en';
import React from 'react';
import {useApi} from 'react-api-wrapper-hook';

// I use react-api-wrapper-hook because it's written by me and i want to show my skills

const {products} = texts;
const ProductList = () => {
  const {} = useApi({
    url: '',
  });
  return <MainLayout withHeader title={products.title}></MainLayout>;
};
export default ProductList;
