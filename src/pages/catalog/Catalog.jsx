import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Catalog.scss";
import Search from "../../components/catalog/search/Search";
import SortBar from "../../components/catalog/sort_bar/SortBar";
import Filter from "../../components/catalog/filter/Filter";
import ProductCard from "../../components/catalog/product_card/ProductCard";
import ManufacturerFilter from "../../components/catalog/filter/ManufacturerFilter";

const Catalog = () => {
  const [cards, setCards] = useState([]);
  const location = useLocation();
  const [queryParams, setQueryParams] = useState(
    new URLSearchParams(location.search)
  );

  useEffect(() => {
    setQueryParams(new URLSearchParams(location.search));
  }, [location.search]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://localhost:7082/api/catalog?${queryParams.toString()}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, [queryParams]);

  return (
    <div className="catalog-content">
      <div className="catalog-left-side">
        <div className="search-container">
          <Search />
        </div>
        <div className="filter-container">
          <Filter cards={cards} />
        </div>
      </div>
      <div className="catalog-right-side">
        <div className="sorting-container">
          <SortBar />
        </div>
        <div className="product-list">
          {cards.map((card) => (
            <ProductCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
