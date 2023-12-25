import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./Filter.scss";
import PriceFilter from "./PriceFilter";
import ManufacturerFilter from "./ManufacturerFilter";

const Filter = ({ cards }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedNames, setSelectedNames] = useState([]);
  const [manufacturerNames, setManufacturerNames] = useState([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const manufacturerNamesArray = cards.map((item) => item.manufacturerName);
    const uniqueNames = Array.from(new Set(manufacturerNamesArray));
    setManufacturerNames(uniqueNames);
  }, [cards]);

  const handleFilterChange = (selectedOptions) => {
    setSelectedFilters(selectedOptions);
    console.log("Выбранные опции фильтрации:", selectedOptions);
  };

  return (
    <div className="filter-bar">
      <PriceFilter />
      <ManufacturerFilter
        manufacturerNames={manufacturerNames}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
