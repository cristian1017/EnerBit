import axios from 'axios';

export const baseApí = axios.create({
  baseURL: 'http://ops.enerbit.dev/learning/api/v1/meters'
})