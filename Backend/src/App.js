import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Select from 'react-select'

const options = [
  { value: 'Nepal', label: 'Nepal', code: 'np' },
  { value: 'India', label: 'India', code: 'in' },
  { value: 'USA', label: 'USA', code: 'us' },
  { value: 'Italy', label: 'Italy', code: 'it'},
  { value: 'Spain', label: 'Spain', code: 'es'},
  { value: 'Germany', label: 'Germany', code: 'de'},
  { value: 'Iran', label: 'Iran', code: 'ir'},
  { value: 'France', label: 'France', code: 'fr'},
  { value: 'UK', label: 'UK' , code: 'gb'},
  { value: 'Switzerland', label: 'Switzerland', code: 'ch'},
  { value: 'Belgium', label: 'Belgium', code: 'be'},
  { value: 'Netherlands', label: 'Netherlands', code: 'nl'},
  { value: 'S. Korea', label: 'S. Korea', code: 'kr'},
  { value: 'Austria', label: 'Austria', code: 'at'},
  { value: 'Turkey', label: 'Turkey', code: 'tr'},
  { value: 'Canada', label: 'Canada', code: 'ca'},
  { value: 'Portugal', label: 'Portugal', code: 'pt'},
  { value: 'Norway', label: 'Norway', code: 'no'},
  { value: 'Israel', label: 'Israel', code: 'il'},
  { value: 'Australia', label: 'Australia', code: 'au'},
  { value: 'Sweden', label: 'Sweden', code: 'se'},
  { value: 'Malaysia', label: 'Malaysia', code: 'my'},
  { value: 'Ireland', label: 'Ireland', code: 'ie'},
  { value: 'Denmark', label: 'Denmark', code: 'dk'},
  { value: 'Chile', label: 'Chile', code: 'cl'},
  { value: 'Poland', label: 'Poland', code: 'pl'},
  { value: 'Japan', label: 'Japan', code: 'jp'},
  { value: 'Russia', label: 'Russia', code: 'ru'},
  { value: 'Pakistan', label: 'Pakistan', code: 'pk'},
  { value: 'Philippines', label: 'Philippines', code: 'ph'},
  { value: 'Thailand', label: 'Thailand', code: 'th'},
  { value: 'Saudi Arabia', label: 'Saudi Arabia', code: 'sa'},
  { value: 'Indonesia', label: 'Indonesia', code: 'id'},
  { value: 'Finland', label: 'Finland', code: 'fi'},
  { value: 'South Africa', label: 'South Africa', code: 'za'},
  { value: 'Greece', label: 'Greece', code: 'gr'},
  { value: 'Mexico', label: 'Mexico', code: 'mx'},
  { value: 'Singapore', label: 'Singapore', code: 'sg'},
  { value: 'Hong Kong', label: 'Hong Kong', code: 'hk'},
  { value: 'Qatar', label: 'Qatar', code: 'qa'},
  { value: 'UAE', label: 'UAE', code: 'ae'},
  { value: 'New Zealand', label: 'New Zealand', code: 'nz'},
  { value: 'Iraq', label: 'Iraq', code: 'iq'},
  { value: 'Kuwait', label: 'Kuwait', code: 'kw'},
  { value: 'Cyprus', label: 'Cyprus', code: 'cy'},
  { value: 'Vietnam', label: 'Vietnam', code: 'vn'},
  { value: 'Ghana', label: 'Ghana', code: 'gh'},
  { value: 'Afghanistan', label: 'Afghanistan', code: 'af'},
  { value: 'Kenya', label: 'Kenya', code: 'ke'},
  { value: 'Bangladesh', label: 'Bangladesh', code: 'bd'},
  { value: 'China', label: 'China', code: 'cn'},
  { value: 'Bhutan', label: 'Bhutan', code: 'bt'},
  {value : 'Maldives', label: 'Maldives', code: 'mv'},
  {value : 'Ireland', label: 'Ireland', code: 'ie'},
  {value : 'Brazil', label: 'Brazil', code: 'br'},
  {value : 'Argentina', label: 'Argentina', code: 'ar'}
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
    countryName: '-',
    cases:'-',
    todayCases: '-',
    deaths: '-',
    todayDeaths:'-',
    recovered: '-',
    active:'-',
    critical: '-',
    url: ''
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
   axios.get('/covid-19/country/all')
   .then(response => {
     console.log('hello')
     console.log(response.data.cases)
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
      critical : response.data.critical,
      url : `https://www.countryflags.io/${this.state.selectedOption.code}/flat/64.png`
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

                <div className = 'row mb-2'>
                  <div className = 'col-xl-4 col-lg-4 col-md-12 col-sm-12 bg-dark text-white'><p><b><u>Total Cases:</u></b><br></br>{this.state.globalCases}</p></div>
                  <div className = 'col-xl-4 col-lg-4 col-md-12 col-sm-12 bg-danger text-white'><p><b><u>Total Deaths:</u></b><br></br>{this.state.globalDeaths}</p></div>
                  <div className = 'col-xl-4 col-lg-4 col-md-12 col-sm-12 bg-success text-white'><p><b><u>Total Recovered:</u></b><br></br>{this.state.globalRecovered}</p></div>

                </div>

              </div>

              <h6 className = "text-white mt-3 text-dark">Please Select Any Country To Get Information:</h6>

              <div className = "container">
                <div className = "row mb-3">

                    <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-3 select">
                    <Select
                    styles={customStyles}
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    theme={theme => ({
                      ...theme,
                      borderRadius: 5,
                      colors: {
                        ...theme.colors,
                        primary25: 'hotpink',
                        primary: 'blue',
                      },
                    })}
                    />
                    </div>
                    <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-3 button">
                      <button className = "getinfo" onClick = {() => this.sendPost()}>Get Information</button>
                    </div>
                    </div>
                </div>

                <h5 className = "mt-4">Country:<img className = "ml-4" src = {this.state.url}></img> </h5>

                <div className = "container">
                  <div className = 'row'>

                  <div className = 'col-xl-4 col-lg-4 col-md-6 mt-4 bg-dark text-white'><p><b><u>Cases:</u></b><br></br>{this.state.cases}</p></div>
                  <div className = 'col-xl-4 col-lg-4 col-md-6 mt-4 bg-danger text-white'><p><b><u>Deaths:</u></b><br></br>{this.state.deaths}</p></div>
                  <div className = 'col-xl-4 col-lg-4 col-md-6 mt-4 bg-success text-white'><p><b><u>Recovered:</u></b><br></br>{this.state.recovered}</p></div>
                  <div className = 'col-xl-4 col-lg-4 col-md-6 mt-4 bg-secondary text-white'><p><b><u>Todays Cases</u></b><br></br>{this.state.todayCases}</p></div>
                  <div className = 'col-xl-4 col-lg-4 col-md-6 mt-4 bg-warning text-white'><p><b><u>Todays Deaths</u></b><br></br>{this.state.todayDeaths}</p></div>
                  <div className = 'col-xl-4 col-lg-4 col-md-6 mt-4 bg-info text-white'><p><b><u>Active</u></b><br></br>{this.state.active}</p></div>
                  <div className = 'col-xl-4 col-lg-4 col-md-6 mt-4 bg-dark text-white'><p><b><u>Critical</u></b><br></br>{this.state.critical}</p></div>
                 
                  </div>

                </div>
            </div>

           
          </div>
      </div>
    )
  }
}
export default App;
