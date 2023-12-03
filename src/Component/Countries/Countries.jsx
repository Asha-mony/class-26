/* eslint-disable react/no-unknown-property */

import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../../Components/Country';

// eslint-disable-next-line no-unused-vars


const Countries = () => {
    // creating state
    const [countries, setCountries] = useState([])

    // load data
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(countries=> {setCountries(countries)
        // console.log(countries)
    })

    },[])


    return (
        <div>
            <h1 style={{textAlign:'center'}}>Countries</h1>
        <div className='container'>
        {
            countries.map((country, idx)=> <Country key={idx} country={country}></Country> )
        }
        </div>
 
        </div>
    );
};

export default Countries;