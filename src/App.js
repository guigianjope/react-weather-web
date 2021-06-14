import React from 'react';
import './App.css';
import DisplayWeather from './components/DisplayWeather.js';
import Header from './components/Header.js';

class App extends React.Component {

  state = {
    coords: {
      latitude: '',
      longitude: ''
    },
    data: {},
    searchData: ""
  }

  componentDidMount() {
    // to get the device location
    if(navigator.geolocation){
      
      navigator.geolocation.getCurrentPosition( (position) => {
        let newCoords = {
          latitude:position.coords.latitude,
          longitude:position.coords.longitude
        }

        this.setState({ coords: newCoords });
        /* console.log(newCoords) */

        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.coords.latitude}&lon=${this.state.coords.longitude}&appid=d8f908e013614921f3c899d0f455fdf8`)
          
        .then(res => {
            if(res.status !== 200) {
              console.log("ERRO");
            }
            return res.json();
          })
          .then(res => {
            let weatherData = {
              city: res.name, 
              temperature: res.main.temp,
              description: res.weather[0].main,
              country: res.sys.country,
              min: res.main.temp_min,
              max: res.main.temp_max,
              icon: res.weather[0].icon
            }

            this.setState({data: weatherData});
              
            /* console.log(this.state.data); */
          })
        })
    }else{
      alert("Geolocation is not Supported.")
    }
  }

  //track the search field
  cityChange = (value) => {
          this.setState({searchData: value})
          console.log(this.state.searchData);
  }

  weatherChange = (event) => {
    event.preventDefault();

    
    //fetch api call

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchData}&appid=d8f908e013614921f3c899d0f455fdf8`)
    .then(res => {
      if(res.status !== 200) {
        console.log("ERRO");
      }
      return res.json();
    })
    .then(res => {
      let weatherData = {
        city: res.name, 
        temperature: res.main.temp,
        description: res.weather[0].main,
        country: res.sys.country,
        min: res.main.temp_min,
        max: res.main.temp_max,
        icon: res.weather[0].icon
      }

      this.setState({data: weatherData});
      })

  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header changeWeather={this.weatherChange} changeCity = {this.cityChange} />
          <DisplayWeather weatherData = {this.state.data} />
        </div>
      </div>
    );
  }
}
export default App;
