import React, { Component } from 'react'

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import { fetchData } from './API'



class App extends Component {
state = {
    data: {},
    country: ''

}

    async componentDidMount(){
        const fetchedData = await fetchData()
        
        this.setState({
            data: fetchedData
        })
    }

    handleCountryChange = async (country) => {
const fetchedData = await fetchData(country)
console.log(fetchedData)
this.setState({ data: fetchedData, country: country})

    }
    render(){
        const {data } = this.state;
        return (
             <div className={styles.container}>
                 <img src='https://i.ibb.co/7QpKsCX/image.png' alt='virus'/>
                 <Cards data={data} country={this.state.country}/>
                 <CountryPicker handleCountryChange={this.handleCountryChange}/>
                 <Chart data={data} country={this.state.country}/>

             </div>
        )
    }
}


export default App;