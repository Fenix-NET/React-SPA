import Menu from "../components/menu/Menu";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Menu />
      </div>
    </header>
  );
};

export default Header;
