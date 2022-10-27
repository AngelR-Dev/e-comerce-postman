import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import LoginScreen from "./pages/LoginScreen";
import ProductId from "./pages/ProductId";
import Purchases from "./pages/Purchases";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Header from "./components/shared/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductId />} />
        <Route path="/login" element={<LoginScreen />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchases" element={<Purchases />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
