import "./styles/App.scss";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import Configurator from "./pages/configurator/Configurator";
import Builds from "./pages/builds/Builds";
import Cart from "./pages/cart/Cart";
import NotFound from "./pages/error/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/videocarts" element={<Catalog />} />
          <Route path="catalog/processors" element={<Catalog />} />
          <Route path="configurator" element={<Configurator />} />
          <Route path="gotovye-sborki" element={<Builds />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" errorElement={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
