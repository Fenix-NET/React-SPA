import "./Catalog.scss";
import Search from "../../components/catalog/search/Search";
import SortBar from "../../components/catalog/sort_bar/SortBar";
import Filter from "../../components/catalog/filter/Filter";

const Catalog = () => {
  return (
    <div className="catalog-content">
      <div className="catalog-left-side">
        <div className="search-container">
          <Search />
        </div>
        <div className="filter-container">
          <Filter />
        </div>
      </div>
      <div className="catalog-right-side">
        <div className="sorting-container">
          <SortBar />
        </div>
        <div className="product-list"></div>
      </div>
    </div>
  );
};

export default Catalog;
