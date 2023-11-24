
import { useEffect } from 'react';
import { useState } from 'react';

const Countries = () => {
    // creating state
    const [countries, setCountries] = useState([])

    // load data
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(countries=> {setCountries(countries)
        console.log(countries)})

    },[])


    return (
        <div>
            <h1>Countries</h1>
        <div>
        {
            countries.map((country, idx)=> <div key={idx}>{idx}
            <h1>{country.name.common}</h1>
            <img src={country?.flags?.png} alt="" />
            <h1>Population: {country?.population}</h1>
            <h1>City: {country?.capital?.[0]}</h1>
            </div>)
        }
        </div>
 
        </div>
    );
};

export default Countries;