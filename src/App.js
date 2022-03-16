import { Routes, Route } from "react-router-dom";
import "./App.css";
import {Navigation} from "./component/Navigation/Navigation"
import {Home} from "./pages/Home/Home"
import {MyCart} from "./pages/MyCart/MyCart"
import {Footer} from "./component/Footer/Footer"
import {WishList} from "./pages/WishList/WishList"
import {AllProducts} from "./pages/AllProducts/AllProducts"
import { Login } from "./pages/Auth/Login";
import { Signup } from "./pages/Auth/Signup";
import MockAPI from "./component/Mockman/Mockman"
 
 

function App() {
  return (
    <> 
    <div className="App-container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route> 
        <Route path="/cart" element={<MyCart/>}></Route> 
        <Route path="/wishlist" element={<WishList/>}></Route> 
        <Route path="/allproducts" element={<AllProducts/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>

        <Route path="/mockman" element={<MockAPI />}> </Route>
      </Routes>

      <Footer />
     </div>
     </>
  );
}

export default App;
