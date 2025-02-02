import axios, { AxiosInstance } from 'axios';
import { DataInterface } from 'Utils/Interface';

const BASE_URL = 'http://localhost:4000/requests';

export const callAPI: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}`,
});
