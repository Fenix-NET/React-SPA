// import NumberItems from "./NumberItems";
// import Sorting from "./Sorting";
// import View from "./View";
// import "./SortBar.scss";

// const SortBar = () => {
//   return (
//     <div className="sort-bar">
//       <Sorting />
//       <NumberItems />
//       <View />
//     </div>
//   );
// };

// export default SortBar;
import NumberItems from "./NumberItems";
import Sorting from "./Sorting";
import View from "./View";
import "./SortBar.scss";

const SortBar = ({ handleSortChange }) => {
  return (
    <div className="sort-bar">
      <Sorting handleSortChange={handleSortChange} />
      <NumberItems />
      <View />
    </div>
  );
};

export default SortBar;
