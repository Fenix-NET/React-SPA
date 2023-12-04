import NumberItems from "./NumberItems";
import Sorting from "./Sorting";
import View from "./View";
import "./SortBar.scss";

const SortBar = () => {
  return (
    <div className="sort-bar">
      <Sorting />
      <NumberItems />
      <View />
    </div>
  );
};

export default SortBar;
