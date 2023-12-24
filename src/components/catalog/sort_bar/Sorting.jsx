// const Sorting = () => {
//   return (
//     <div className="sort-container">
//       <span>Сортировка: </span>
//       <span className="sort-select">
//         <select>
//           <option selected value="default">
//             По умолчанию
//           </option>
//           <option value="lime">Сначала недорогие</option>
//           <option value="coconut">Сначала дорогие</option>
//         </select>
//       </span>
//     </div>
//   );
// };

// export default Sorting;
import { useState } from "react";
import "./Sorting.scss";

const Sorting = ({ handleSortChange }) => {
  const [selectedOption, setSelectedOption] = useState("default");

  const handleSelectionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    handleSortChange(selectedValue);
  };

  return (
    <div className="sort-container">
      <span>Сортировка: </span>
      <span className="sort-select">
        <select value={selectedOption} onChange={handleSelectionChange}>
          <option value="default">По умолчанию</option>
          <option value="price">Сначала недорогие</option>
          <option value="coconut">Сначала дорогие</option>
        </select>
      </span>
    </div>
  );
};

export default Sorting;
