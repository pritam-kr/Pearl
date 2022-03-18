import { Routes, Route } from "react-router-dom";
import "./App.css";

import {Footer, Navigation} from "./component/index"
import {Login, Signup, AllProducts, WishList, Home, MyCart} from "./pages/index"

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
