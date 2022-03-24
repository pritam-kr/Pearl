import { Routes, Route } from "react-router-dom";
import "./App.css";
import {Footer, Navigation} from "./component/index"
import {Login, Signup, AllProducts, WishList, Home, MyCart, Logout} from "./pages/index"
import MockAPI from "./component/Mockman/Mockman"
import {useAuthContext} from "./Context/index"

import {ToastContainer} from "react-toastify"

function App() {

  const {token} = useAuthContext()

  return (
    <> 
    <ToastContainer autoClose={1000} />
    <div className="App-container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route> 
        <Route path="/cart" element={token? <MyCart/>: <Login />}></Route> 
        <Route path="/wishlist" element={token? <WishList/> : <Login />}></Route> 
        <Route path="/allproducts" element={<AllProducts/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/logout" element={token ? <Logout />: <Login /> }></Route>
        <Route path="/mockman" element={<MockAPI />}> </Route>
      </Routes>

      <Footer />
     </div>
     </>
  );
}

export default App;
