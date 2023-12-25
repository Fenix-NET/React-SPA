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
  const [selectedSort, setSelectedSort] = useState("default");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedSort(selectedValue);
    handleSortChange(selectedValue);
  };

  return (
    <div className="sort-container">
      <span>Сортировка: </span>
      <span className="sort-select">
        <select value={selectedSort} onChange={handleSelectChange}>
          <option value="default">По умолчанию</option>
          <option value="price">Сначала недорогие</option>
          <option value="coconut">Сначала дорогие</option>
        </select>
      </span>
    </div>
  );
};

export default Sorting;
