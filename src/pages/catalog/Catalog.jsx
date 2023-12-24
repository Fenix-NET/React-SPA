// import { useEffect, useState } from "react";
// import "./Catalog.scss";
// import Search from "../../components/catalog/search/Search";
// import SortBar from "../../components/catalog/sort_bar/SortBar";
// import Filter from "../../components/catalog/filter/Filter";
// import ProductCard from "../../components/catalog/product_card/ProductCard";

// const Catalog = () => {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(
//           "https://localhost:7082/api/catalog?CategoryId=1"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         setCards(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="catalog-content">
//       <div className="catalog-left-side">
//         <div className="search-container">
//           <Search />
//         </div>
//         <div className="filter-container">
//           <Filter />
//         </div>
//       </div>
//       <div className="catalog-right-side">
//         <div className="sorting-container">
//           <SortBar />
//         </div>
//         <div className="product-list">
//           {cards.map((card) => (
//             <ProductCard key={card.id} card={card} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Catalog;

import { useEffect, useState } from "react";
import "./Catalog.scss";
import Search from "../../components/catalog/search/Search";
import SortBar from "../../components/catalog/sort_bar/SortBar";
import Filter from "../../components/catalog/filter/Filter";
import ProductCard from "../../components/catalog/product_card/ProductCard";

const Catalog = () => {
  const [cards, setCards] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://localhost:7082/api/catalog?CategoryId=1&sortBy=${sortBy}`
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
  }, [sortBy]);

  const handleSortChange = (selectedValue) => {
    setSortBy(selectedValue);
  };

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
          <SortBar handleSortChange={handleSortChange} />
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
