import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

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
            </div>
          </div>
      </div>
    )
  }
}
export default App;
