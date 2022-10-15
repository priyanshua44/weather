import React from "react";
import "../App.css";

export default function Heading({inputRef, handleSearch}) {
  return (
    <div>
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
    </div>
  );
}
