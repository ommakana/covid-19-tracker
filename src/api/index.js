import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
export const fetchData = async(country) => {
    if(!country) {
        const response = await axios.get(url);
        return response;
    }
   else {
    const response = await axios.get(`${url}/countries/${country}`);
    return response;
   }
}

export const fetchCountries = async() => {
    const response = await axios.get(`${url}/countries`);
    return response;
}