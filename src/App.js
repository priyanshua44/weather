import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import axios from "axios";

// https://api.openweathermap.org/data/2.5/weather?q=london&appid=

export default function App() {
  const inputRef = useRef(null)

  const [inputCity, setinputCity] = useState("");
  const [data, setdata] = useState("");
  const [error, seterror] = useState("");
  const apikey = "f56f24967aaf51182d1d4df628297c6d";
  
  useEffect(() => {
    const weatherDetails = async () => {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          inputCity +
          "&appid=" +
          apikey
      ).catch((error) => seterror("Enter valid city name"), setdata(""));
      setdata(response.data);
      seterror("")
      // console.log(response.data.weather[0].icon)
    }
    
    if(inputCity){
    weatherDetails()
    }

  }, [inputCity]);


  const handleSearch = () => {
    setinputCity(inputRef.current.value)
  };
  
  return (
    <div>
      <div className="container-fluid">
        <div className="weatherBg my-4">
          <h1 className="heading">Weather App</h1>

          <div className="row">
            <div className="col-md-12 my-1">
            <input
              type="text"
              className="form-control my-2"
              ref={inputRef}
              placeholder="Enter the city name"
              // value={inputCity}
              // onChange={onInputChange}
            />
            </div>
            <div className="d-flex justify-content-center">
            <button
              className="btn btn-warning"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
            </div>
          </div>
        </div>

        <div className="text-center my-3 text-white" ><h1>{error}</h1></div>

        {Object.keys(data).length > 0 && (
          <div className="row text-center mt-2 ">
            <div className="responsive col col-lg-4 col-md-5 col-sm-5 shadow rounded weatherResultBox">
              <img
                className="weathorIcon"
                // src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
                
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              />

              <h5 className="weathorCity">{data.name}</h5>
              <h6 className="weathorTemp">
                {Math.round(data.main.temp - 273.15)}°C
              </h6> 
              <h6 className="font-weight-bold text-capitalize">{data.weather[0].description}</h6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
