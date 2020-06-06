import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../api';
import { NativeSelect, FormControl } from '@material-ui/core';



function Datepicker ({handleCountryChange}) {

    const [countries,setCountries] = useState([]);


    useEffect(() => {

        const fetchAPI = async () =>{
            setCountries(await fetchCountries())
        };

        fetchAPI();

    },[]);


    return (
        <div>
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countries.map((country, i) => <option key={i} value={country.name}>{country.name}</option>)}
            </NativeSelect>
            </FormControl>
            
        </div>
    );
}

export default Datepicker;