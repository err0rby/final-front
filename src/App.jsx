import { Route, Routes } from "react-router-dom";
import EmailVerifyPage from "./pages/EmailVerifyPage/EmailVerifyPage";
import MainPage from "./pages/MainPage/MainPage";
import Products from "./components/Products/Products"
import OneAuction from "./pages/OneAuction/OneAuction";
import ProductId from "./components/Products/ProductId"
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='user/:id/verify/:token' element={<EmailVerifyPage />} />
        <Route path='/products' element={<Products />} />
        <Route path="/oneAuction/:id" element={<OneAuction />} />
        <Route path="/category/:id" element={<ProductId />} />
      </Routes>
    </>
  );
}

export default App;
