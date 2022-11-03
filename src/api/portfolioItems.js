import axios from 'axios';
const url = 'http://localhost:3000/api/portfolio-items';

export const getPortfolioItems = () => {
    return axios.get(url);
}