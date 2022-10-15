import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Heading from "./components/Heading";
import Card from "./components/Card";

// https://api.openweathermap.org/data/2.5/weather?q=london&appid=

export default function App() {
  const inputRef = useRef(null);

  const [inputCity, setinputCity] = useState("Delhi");
  const [data, setdata] = useState("");
  const [error, seterror] = useState("");
  const apikey = "f56f24967aaf51182d1d4df628297c6d";

  useEffect(() => {
    const weatherDetails = async () => {
      const response = await axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            inputCity +
            "&appid=" +
            apikey
        )
        .catch((error) => seterror("Enter valid city name"), setdata(""));
      setdata(response.data);
      seterror("");
      // console.log(response.data.weather[0].icon)
    };

    if (inputCity) {
      weatherDetails();
    }
  }, [inputCity]);

  const handleSearch = () => {
    setinputCity(inputRef.current.value);
  };

  return (
    <div>
      <div className="container-fluid">
        <Heading inputRef={inputRef} handleSearch={handleSearch} />
        <Card data={data} error={error}/>
      </div>
    </div>
  );
}
