import { Outlet, Link } from "react-router-dom";
import "./Layout.scss";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main-container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
