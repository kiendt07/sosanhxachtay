import axios from 'axios';
import {BASE_URL} from './constants';

export const getFeaturedProducts = () => axios.get(BASE_URL + 'products.json')
export const getProductInfo = (id) => axios.get(BASE_URL + 'products/'+id+'.json')
