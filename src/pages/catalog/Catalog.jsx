import "./Catalog.scss";

const Catalog = () => {
  return (
    <div className="catalog-content">
      <div className="catalog-left-side">
        <div className="search-container"></div>
        <div className="filter-container"></div>
      </div>
      <div className="catalog-right-side">
        <div className="sorting-container"></div>
        <div className="product-list"></div>
      </div>
    </div>
  );
};

export default Catalog;
