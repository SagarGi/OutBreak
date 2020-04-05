import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Select from 'react-select'

const options = [
  { value: 'nepal', label: 'Nepal' },
  { value: 'india', label: 'India' },
  { value: 'usa', label: 'USA' },
  { value: 'Italy', label: 'Italy'},
  { value: 'Spain', label: 'Spain'},
  { value: 'Germany', label: 'Germany'},
  { value: 'Iran', label: 'Iran'},
  { value: 'France', label: 'France'},
  { value: 'UK', label: 'UK'},
  { value: 'Switzerland', label: 'Switzerland'},
  { value: 'Belgium', label: 'Belgium'},
  { value: 'Netherlands', label: 'Netherlands'},
  { value: 'S. Korea', label: 'S. Korea'},
  { value: 'Austria', label: 'Austria'},
  { value: 'Turkey', label: 'Turkey'},
  { value: 'Canada', label: 'Canada'},
  { value: 'Portugal', label: 'Portugal'},
  { value: 'Norway', label: 'Norway'},
  { value: 'Israel', label: 'Israel'},
  { value: 'Australia', label: 'Australia'},
  { value: 'Sweden', label: 'Sweden'},
  { value: 'Malaysia', label: 'Malaysia'},
  { value: 'Ireland', label: 'Ireland'},
  { value: 'Denmark', label: 'Denmark'},
  { value: 'Chile', label: 'Chile'},
  { value: 'Poland', label: 'Poland'},
  { value: 'Japan', label: 'Japan'},
  { value: 'Russia', label: 'Russia'},
  { value: 'Pakistan', label: 'Pakistan'},
  { value: 'Philippines', label: 'Philippines'},
  { value: 'Thailand', label: 'Thailand'},
  { value: 'Saudi Arabia', label: 'Saudi Arabia'},
  { value: 'Indonesia', label: 'Indonesia'},
  { value: 'Finland', label: 'Finland'},
  { value: 'South Africa', label: 'South Africa'},
  { value: 'Greece', label: 'Greece'},
  { value: 'Mexico', label: 'Mexico'},
  { value: 'Singapore', label: 'Singapore'},
  { value: 'Hong Kong', label: 'Hong Kong'},
  { value: 'Qatar', label: 'Qatar'},
  { value: 'UAE', label: 'UAE'},
  { value: 'New Zealand', label: 'New Zealand'},
  { value: 'Iraq', label: 'Iraq'},
  { value: 'Kuwait', label: 'Kuwait'},
  { value: 'Cyprus', label: 'Cyprus'},
  { value: 'Vietnam', label: 'Vietnam'},
  { value: 'Ghana', label: 'Ghana'},
  { value: 'Afghanistan', label: 'Afghanistan'},
  { value: 'Kenya', label: 'Kenya'},
  { value: 'Bangladesh', label: 'Bangladesh'},
  { value: 'China', label: 'China'},
  { value: 'Bhutan', label: 'Bhutan'},
  {value : 'Maldives', label: 'Maldives'},
  {value : 'Ireland', label: 'Ireland'},
  {value : 'Brazil', label: 'Brazil'},
  {value : 'Argentina', label: 'Argentina'}
];

const customStyles = {
  container: provided => ({
    ...provided,
    width: 400
    
    
  })
};



class App extends Component
{

constructor()
{
  super()
  this.state = {
    globalCases: '-',
    globalDeaths: '-',
    globalRecovered: '-'
  }

}


//gets invoked when page is realoaded
componentDidMount()
{
   axios.get('/covid-19/country')
   .then(response => {
     console.log(response.data)
     this.setState({
      globalCases : response.data.cases,
      globalDeaths : response.data.deaths,
      globalRecovered : response.data.recovered
    })
   })

  
}


  render()
  {
    return(
      <div className = "main">
          <div className = "container main-content">
            <div className = "card wrapper">
              <h1><u>COVID-19 INFORMATION HUB</u></h1>
              <div className = "container">

                <div className = 'row m-2 mt-3'>
                  <div className = 'col bg-dark text-white'><b><u>Total Cases:</u></b><br></br>{this.state.globalCases}</div>
                  <div className = 'col bg-danger text-white'><b><u>Total Deaths:</u></b><br></br>{this.state.globalDeaths}</div>
                  <div className = 'col bg-success text-white'><b><u>Total Recovered:</u></b><br></br>{this.state.globalRecovered}</div>

                </div>

              </div>

              <p className = "text-white mt-3">Please Select Any Country To Get Information</p>

              <div className = "container">
                <div className = "row mt-3">

                    <div className = "col-sm select">
                    <Select
                    styles={customStyles}
                     options={options}
                    />
                    </div>
                    <div className = "col-sm button">
                      <button className = "getinfo bg-danger">Get Information</button>
                    </div>
                    </div>
                </div>


            </div>
          </div>
      </div>
    )
  }
}
export default App;
