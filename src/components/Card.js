import React from "react";
import "../App.css";

export default function Card({ data, error }) {
  return (
    <div>
      <div className="text-center my-3 text-white">
        <h1>{error}</h1>
      </div>

      {Object.keys(data).length > 0 && (
        <div className="responsive row shadow rounded weatherResultBox">
          <div className="left col d-flex align-items-center d-flex justify-content-center">
            <div className="row">
              <div className="text-center">
                <h5>Low</h5>
                <p>{Math.round(data.main.temp_min - 273.15)}°C</p>
              </div>
            </div>
          </div>

          <div className="center col text-center">
            <img
              className="weathorIcon my-2"
              // src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"

              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            />
            <h5 className="weathorCity">{data.name}</h5>
            <div className="d-flex justify-content-center">
              <h6 className="weathorTemp">
                {Math.round(data.main.temp - 273.15)}°C
              </h6>
            </div>
            <h6 className="description font-weight-bold text-capitalize my-2">
              {data.weather[0].description}
            </h6>
          </div>
          <div className="right col d-flex align-items-center d-flex justify-content-center">
            <div className="text-center">
              <h5>High</h5>
              <p>{Math.round(data.main.temp_max - 273.15)}°C</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
