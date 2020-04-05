import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Select from 'react-select'

const options = [
  { value: 'Nepal', label: 'Nepal' },
  { value: 'India', label: 'India' },
  { value: 'USA', label: 'USA' },
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
    globalRecovered: '-',
    selectedOption: '',
    countryName: '',
    cases:'',
    todaysCases: '',
    deaths: '',
    todayDeaths:'',
    recovered: '',
    active:'',
    critical: ''
  }

}

handleChange = selectedOption => {
  this.setState(
    { selectedOption },
    () => this.state.selectedOption.value
  )
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

sendPost()
{
  if(!this.state.selectedOption.value)
  {
    alert('Please select your country!!!')
  }
  axios.post('/covid-19',{
    country1 : this.state.selectedOption.value
  })
  .then(response =>{
    console.log(response.data)
    this.setState({
      countryName : response.data.country,
      cases : response.data.cases,
      todayCases : response.data.todayCases,
      deaths : response.data.deaths,
      todayDeaths : response.data.todayDeaths,
      recovered : response.data.recovered,
      active : response.data.active,
      critical : response.data.critical
      
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
              <h5>World Wide:</h5>
              <div className = "container">

                <div className = 'row ml-4 mr-4 mb-2'>
                  <div className = 'col  bg-dark text-white'><p><b><u>Total Cases:</u></b><br></br>{this.state.globalCases}</p></div>
                  <div className = 'col  bg-danger text-white'><p><b><u>Total Deaths:</u></b><br></br>{this.state.globalDeaths}</p></div>
                  <div className = 'col  bg-success text-white'><p><b><u>Total Recovered:</u></b><br></br>{this.state.globalRecovered}</p></div>

                </div>

              </div>

              <p className = "text-white mt-3 text-dark">Please Select Any Country To Get Information</p>

              <div className = "container">
                <div className = "row m-2 mt-3 mb-3">

                    <div className = "col-sm select">
                    <Select
                    styles={customStyles}
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    />
                    </div>
                    <div className = "col-sm button">
                      <button className = "getinfo" onClick = {() => this.sendPost()}>Get Details</button>
                    </div>
                    </div>
                </div>

                <h5 className = "mt-4">SELECTED COUNTRY: {this.state.selectedOption.value}</h5>

                <div className = "container">
                  <div className = 'row ml-4 mr-4'>

                  <div className = 'col col-md-6 mt-4 bg-dark text-white'><p><b><u>Total Cases:</u></b><br></br>{this.state.globalCases}</p></div>
                  <div className = 'col col-md-6 mt-4 bg-danger text-white'><p><b><u>Total Deaths:</u></b><br></br>{this.state.globalDeaths}</p></div>
                  <div className = 'col col-md-6 mt-4 bg-success text-white'><p><b><u>Total Recovered:</u></b><br></br>{this.state.globalRecovered}</p></div>
                  <div className = 'col col-md-6 mt-4 bg-secondary text-white'><p><b><u>Total Cases:</u></b><br></br>{this.state.globalCases}</p></div>
                  <div className = 'col col-md-6 mt-4 bg-warning text-white'><p><b><u>Total Deaths:</u></b><br></br>{this.state.globalDeaths}</p></div>
                  <div className = 'col col-md-6 mt-4 bg-info text-white'><p><b><u>Total Recovered:</u></b><br></br>{this.state.globalRecovered}</p></div>

                  </div>

                </div>
            </div>

           
          </div>
      </div>
    )
  }
}
export default App;
