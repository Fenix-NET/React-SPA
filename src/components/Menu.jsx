import { NavLink, Link } from "react-router-dom";
import "./Menu.scss";
import logo from "../assets/images/logo-ver2-edit.png";
import icon_cart from "../assets/icons/icon-cart1.png";
import icon_lk from "../assets/icons/icon-lk1.png";

const Menu = () => {
  return (
    <nav class="nav-menu">
      <div class="left-menu">
        <Link to=".">
          <img src={logo} alt="logo" />
        </Link>
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeLink-left" : "left-menu-btn"
          }
          to="catalog"
        >
          Каталог
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeLink-left" : "left-menu-btn"
          }
          to="configurator"
        >
          Конфигуратор
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeLink-left" : "left-menu-btn"
          }
          to="gotovye-sborki"
        >
          Готовые сборки
        </NavLink>
      </div>
      <div class="right-menu">
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeLink-right" : "right-menu-btn"
          }
          to="cart"
        >
          <span className="icon-cart">
            <img src={icon_cart} alt="cart" />
          </span>
          <span className="menu-cart">Корзина</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "activeLink-right" : "right-menu-btn"
          }
          to="registration"
        >
          <span className="icon-lk">
            <img src={icon_lk} alt="auth" />
          </span>
          <span className="menu-lk">Войти</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Menu;
