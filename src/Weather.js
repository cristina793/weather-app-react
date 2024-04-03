import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";



export default function Weather(props) {
  const[weatherData, setWeatherData] = useState({});
const[ready, setReady]=useState(false);
  
    
  function handleResponse(response){
   
    setWeatherData({
      temperature: (Math.round(response.data.main.temp)),
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: "Wednesday 07:00",
    });
   setReady(true);
  }
  if(ready){
    return (
       <div className="Weather">
       <form>
          <div className="row">
            <div className="col-9">
              < input 
                type ="search"
                placeholder="Enter a city.." 
                className="form-control"
                autoFocus="on"/>
             </div>
            <div className="col-3">
               <input type="submit" 
                      value="Search" 
                      className="btn btn-primary w-100"/> 
            </div> 
         </div>
      </form>
         <h1>{weatherData.city}</h1> 
           <ul>
             <li>{weatherData.date}</li>
             <li className="text-capitalize">{weatherData.description} </li>
            </ul>
          <div className="row mt-3 ">
             <div className="col-6">
               
                  <img 
                   src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
                    alt="mostly cloudy"
                   />
                     
                     <span className="temperature"> {weatherData.temperature} </span>
                     <span  className="unit" >°C</span>
                     
                
             </div>
             <div className="col-6">
                <ul>
                   <li>
                   Humidity: {weatherData.humidity}%
                   </li>
                   <li>
                   Wind: {weatherData.wind} km/h
                   </li>
                </ul>
              </div>
          </div>
      </div>);}
    else{
       const apiKey ="e0a5a97de9a0b7a951e9d154a8f9bad8";
       
       let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
       axios.get(apiUrl).then(handleResponse);
       return "Loading..";}
  
}