import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import EmailVerifyPage from "./pages/EmailVerifyPage/EmailVerifyPage";
import MainPage from "./pages/MainPage/MainPage";
import OneAlphabetPage from "./pages/OneAlphabetPage/OneAlphabetPage";
import { Link } from "react-router-dom";
import OneAuction from "./pages/OneAuction/OneAuction";
import Products from "./pages/Products/Products";


function App() {
  const token = useSelector((state) => state.application.token)
  
  return (
    <>
     { token == "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDQxZDVhY2MxNzBhZDYxZmU0ZGU5OSIsImlhdCI6MTY2NTQwOTQ3OCwiZXhwIjoxNjY1NzUxNDc4fQ.R9TeQQ2IMLnuKjBluE35u44lVBojuxDzaw74U6PkrtQ" ? <a href="http://localhost:3030/user/login">ДОБРО ПОЖАЛОВАТЬ АДМИН!!!<br/>продолжить работу...</a> : <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='user/:id/verify/:token' element={<EmailVerifyPage />} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/category/:id' element={<Products/>} />
        <Route path="/oneAuction/:id" element={<OneAuction />} />
        <Route path="/vremenno" element={<OneAlphabetPage />} />
      </Routes> }
 
    </>
  );
}

export default App;