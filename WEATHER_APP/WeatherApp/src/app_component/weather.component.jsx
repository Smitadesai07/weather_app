import React from 'react'
import 'weather-icons/css/weather-icons.css';
import '../App.css';

function minmaxTem(min,max) {
  if(min && max){
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}
function Weather(props) {
  return (
    <div className="container black">
      <div className="cards">
        <h1>{props.city}</h1>
        <h5 className="py-4">
            <i className={`wi ${props.weatherIcon} display-1`}></i>
        </h5>
        {props.temp_celsius?(<h1 className="py-2">{props.temp_celsius}&deg;</h1>):null}

      {/* Show Mix and Max Temperature*/ }
      {minmaxTem(props.temp_min,props.temp_max)}
      <h5>{props.description}</h5>
      </div>
    </div>
  )
}

export default Weather;
