import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl} from '@material-ui/core'
import { countries } from '../../API'

import styles from './CountryPicker.module.css'
const CountryPicker = ({handleCountryChange}) => {

    const [countryData, setCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async() => {
            setCountries(await countries()) 
        }
        fetchAPI()
    },[setCountries])


    return (
        <div className={styles.formControl}>
      <FormControl >
         
          <NativeSelect defaultValue="" onChange={(event)=> handleCountryChange(event.target.value)}>
              <option value="global">Global</option>
    {countryData.map((country, index) => <option value={country}key={index}>{country}</option>)}
          </NativeSelect>
      </FormControl>
      </div>
    )
}

export default CountryPicker;