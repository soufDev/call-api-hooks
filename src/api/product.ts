import axios, { Canceler } from 'axios';
import { Props as ProductProps } from '../components/Products/Product';
import { Props as DetailProps } from '../components/Products/Details';

const URL = 'https://s3-eu-west-1.amazonaws.com/developer-application-test/cart';

const { CancelToken } = axios;
let cancel: Canceler;

export const fetchProductList = (): Promise<ProductProps[]> => {
  return axios.get(`${URL}/list`, {
    cancelToken: new CancelToken((cancellation) => cancel = cancellation)
  }).then(results => results.data.products);
};

export const fetchProductListAbort = () => cancel();

export const fetchProductDetails = (id: number): Promise<DetailProps> => {
  return axios.get(`${URL}/${id}/detail`, {
    cancelToken: new CancelToken((cancellation) => cancel = cancellation)
  }).then(result => result.data);
};

export const fetchProductDetailsAbort = () => cancel();
