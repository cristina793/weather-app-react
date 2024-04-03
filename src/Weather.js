import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo.js";
import "./Weather.css";
import axios from "axios";



export default function Weather(props) {
  const[weatherData, setWeatherData] = useState({});
  const[ready, setReady]=useState(false);
  const[city, setCity] = useState(props.defaultCity);  
    
  function handleResponse(response){
    setWeatherData({
      temperature: (Math.round(response.data.main.temp)),
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
   setReady(true);
  }

  function search(){
  const apiKey ="e0a5a97de9a0b7a951e9d154a8f9bad8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  }
  function handleSubmit(event){
    event.preventDefault(); 
    search();
  }
  function handleCityChange(event){
 setCity(event.target.value);}

  if(ready){
    return (
       <div className="Weather">
       <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              < input 
                type ="search"
                placeholder="Enter a city.." 
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange} />
             </div>
            <div className="col-3">
               <input type="submit" 
                      value="Search" 
                      className="btn btn-primary w-100"/> 
            </div> 
         </div>
      </form>

    <WeatherInfo data={weatherData} />
        
      </div>);}
    else {
     search();
    return "Loading..";
      }
}