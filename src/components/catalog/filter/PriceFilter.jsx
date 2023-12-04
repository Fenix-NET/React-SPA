import React from "react";
import "./PriceFilter.scss";
import { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const PriceFilter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const minAllowedPrice = 0;
  const maxAllowedPrice = 1000;

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= minAllowedPrice && value <= maxPrice) {
      setMinPrice(value);
    }
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value <= maxAllowedPrice && value >= minPrice) {
      setMaxPrice(value);
    }
  };

  const handleRangeChange = (values) => {
    const [newMinPrice, newMaxPrice] = values;
    if (
      newMinPrice >= minAllowedPrice &&
      newMaxPrice <= maxAllowedPrice &&
      newMinPrice <= newMaxPrice
    ) {
      setMinPrice(newMinPrice);
      setMaxPrice(newMaxPrice);
    }
  };

  return (
    <div class="price-filter-container">
      <span className="name-type-filter">Цена</span>
      <div className="input-price-container">
        <input
          className="filter-price"
          type="number"
          min={minAllowedPrice}
          max={maxPrice}
          value={minPrice}
          onChange={handleMinChange}
          placeholder={`от ${minAllowedPrice}`}
        />
        <input
          className="filter-price"
          type="number"
          min={minPrice}
          max={maxAllowedPrice}
          value={maxPrice}
          onChange={handleMaxChange}
          placeholder={`до ${maxAllowedPrice}`}
        />
      </div>
      <Range
        step={1}
        min={minAllowedPrice}
        max={maxAllowedPrice}
        values={[minPrice, maxPrice]}
        onChange={handleRangeChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              background: "#ccc",
              borderRadius: "3px",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#548BF4", "#ccc"],
                  min: { minAllowedPrice },
                  max: { maxAllowedPrice },
                  rtl,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              borderRadius: "50%",
              backgroundColor: "#007bff",
            }}
          />
        )}
      />
    </div>
  );
};

export default PriceFilter;
