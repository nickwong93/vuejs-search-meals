import axios from 'axios'

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_MEALS_SEARCH_BASE_API,
  });


export default axiosClient;