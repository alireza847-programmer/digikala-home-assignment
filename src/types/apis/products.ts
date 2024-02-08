export const GET_PRODUCTS_API_URL = 'products';

export interface ProductsDto {
  products: Array<ProductDto>;
  total: number;
  skip: number;
  limit: number;
}

export interface ProductDto {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}
