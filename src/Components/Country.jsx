import React from 'react';

const country = ({country}) => {
    console.log(country);
  
    return (
        <div style={{border:'2px solid blue', textAlign:'center'}}>
            <h1>{country.name.common}</h1>
            <img src={country?.flags?.png} alt="" />
            <h1>Population: {country?.population}</h1>
            <h1>City: {country?.capital?.[0]}</h1>
     </div>
    );
};

export default country;