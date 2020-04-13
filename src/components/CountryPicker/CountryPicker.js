import React, {useEffect, useState} from 'react';
import { fetchCountries } from "../../api/index";
import { FormControl, Select} from '@material-ui/core';

const CountryPicker = props => {

    const [countries, setCountries] = useState([]);

    useEffect(()=> {
        const fetchApiData = async () => {
            const response = await fetchCountries();
            setCountries(response.data.countries);
        };
        fetchApiData();
    }, []);


    return <FormControl>
        <Select native defaultValue="" onChange={(e) => props.handleChange(e.currentTarget.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => <option value={country.name} key={i}>{country.name}</option>)}
        </Select>
    </FormControl>
}

export default CountryPicker;