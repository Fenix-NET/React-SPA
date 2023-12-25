import { useState } from "react";

const ManufacturerFilter = ({ manufacturerNames, handleFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (value) => {
    const index = selectedOptions.indexOf(value);
    if (index > -1) {
      const newOptions = [...selectedOptions];
      newOptions.splice(index, 1);
      setSelectedOptions(newOptions);
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const applyFilters = () => {
    handleFilterChange(selectedOptions);
    toggleDropdown();
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Выберите опции
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {manufacturerNames.map((name) => (
            <label key={name}>
              <input
                type="checkbox"
                value={name}
                checked={selectedOptions.includes(name)}
                onChange={() => handleOptionChange(name)}
              />
              {name}
            </label>
          ))}
          <button onClick={applyFilters}>Применить</button>
        </div>
      )}
    </div>
  );
};

export default ManufacturerFilter;

// import React, { useState, useEffect } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";

// const ManufacturerFilter = ({ cards }) => {
//   const [selectedNames, setSelectedNames] = useState([]);
//   const [manufacturerNames, setManufacturerNames] = useState([]);
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const uniqueNames = Array.from(
//       new Set(cards.map((card) => card.manufacturerName))
//     );
//     setManufacturerNames(uniqueNames);
//   }, [cards]);

//   useEffect(() => {
//     const selectedNamesFromUrl = searchParams.getAll("ManufacturerNamesList");
//     setSelectedNames(selectedNamesFromUrl);
//   }, [searchParams]);

//   const handleCheckboxChange = (name) => {
//     setSelectedNames((prevNames) => {
//       if (prevNames.includes(name)) {
//         return prevNames.filter((prevName) => prevName !== name);
//       } else {
//         return [...prevNames, name];
//       }
//     });
//   };

//   const handleApplyFilter = () => {
//     const newSearchParams = new URLSearchParams(searchParams);
//     newSearchParams.delete("ManufacturerNamesList");
//     selectedNames.forEach((name) => {
//       newSearchParams.append("ManufacturerNamesList", name);
//     });
//     navigate({
//       search: newSearchParams.toString(),
//     });
//   };

//   return (
//     <div>
//       <h3>Производитель</h3>
//       {manufacturerNames.length === 0 ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {manufacturerNames.map((name) => (
//             <li key={name}>
//               <input
//                 type="checkbox"
//                 id={name}
//                 value={name}
//                 checked={selectedNames.includes(name)}
//                 onChange={() => handleCheckboxChange(name)}
//               />
//               <label htmlFor={name}>{name}</label>
//             </li>
//           ))}
//         </ul>
//       )}
//       <button onClick={handleApplyFilter}>Применить значения</button>
//     </div>
//   );
// };

// export default ManufacturerFilter;
