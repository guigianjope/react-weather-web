import React from 'react';
import './DisplayWeather.css';

function DisplayWeather(props) {
    console.log(props.weatherData)

    return (
        <div className="app-wrap">
            <div className="detail-container">
                <div className="city-country">
                    <h2>{props.weatherData.city}, {props.weatherData.country}</h2>
                </div>
                <div className="icon">
                    <img src={`http://openweathermap.org/img/wn/${props.weatherData.icon}@2x.png`} alt="weatherIcon" />
                </div>
                <div className="temperature">
                    <h1>{props.weatherData.temperature} °F</h1>
                </div>
                <div className="min-max">
                    <h3>{props.weatherData.min} °F / {props.weatherData.max} °F</h3>
                </div>
                <div className="description">
                    <h1>{props.weatherData.description}</h1>
                </div>
            </div>
        </div>
    )
}

export default DisplayWeather;