import "./Filter.scss";
import PriceFilter from "./PriceFilter";

const Filter = () => {
  return (
    <div className="filter-bar">
      <p className="filter-header">Фильтры</p>
      <PriceFilter />
    </div>
  );
};

export default Filter;
