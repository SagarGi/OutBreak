import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component
{
  render()
  {
    return(
      <div className = "main">
          <div className = "container main-content">
            <div className = "card wrapper">
              <h1><u>COVID-19 INFORMATION HUB</u></h1>
              <div className = "container">

                <div className = 'row m-2 mt-3'>
                  <div className = 'col bg-dark text-white'><b><u>Total Cases:</u></b><br></br> 1000</div>
                  <div className = 'col bg-danger text-white'><b><u>Total Deaths:</u></b><br></br> 1000</div>
                  <div className = 'col bg-success text-white'><b><u>Total Recovered:</u></b><br></br> 1000</div>

                </div>

              </div>
            </div>
          </div>
      </div>
    )
  }
}
export default App;
