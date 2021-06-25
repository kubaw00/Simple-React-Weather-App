import React from 'react';
import './Result.css'

let content = null;

const Result = (props) => {
    const { value, city, err, sunrise, sunset, temp, pressure, wind, date } = props.weather
    
   if(value === ""){
       content = null
   }

    if(!err && value){
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();

        content = (
            <>
                <h3>Wyniki wyszukiwania dla: <em>{city}</em></h3>
                <h4>Dane dla dnia i godziny: {date}</h4>
                <h4>Wschód Słońca: {sunriseTime}</h4>
                <h4>Zachód Słońca: {sunsetTime}</h4>
                <h4>Temperatura powietrza: {temp} &deg;C</h4>
                <h4>Ciśnienie atmosferyczne: {pressure} hPa</h4>
                <h4>Prędkość wiatru: {wind} m/s</h4>
            </>
        )

    }
    
    

    return (
        
        <div className="result">
            {err ? `${value} nie istnieje w naszej bazie` : content}
        </div>
      
      );
}
 
export default Result;