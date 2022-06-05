import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import {Footer, Navigation} from "./component/index"
import {Login, Signup, AllProducts, WishList, Home, MyCart, Logout, SingleProduct} from "./pages/index"
import MockAPI from "./component/Mockman/Mockman"
import {useAuthContext, PrivateRoute} from "./Context/index"
import {ToastContainer} from "react-toastify"
import {Scroll} from "./utils/Scroll"
import {Toaster} from "react-hot-toast"
 

function App() {

  const {token} = useAuthContext()

  return (
    <> 
    <Toaster  position="top-right"  toastOptions={{style: {fontSize: "1.2rem"}}} />
    <div className="App-container">
      <Navigation />
      <Scroll>
      <Routes>
        <Route path="/" element={<Home />}></Route> 
        <Route path="/cart" element={ <PrivateRoute> <MyCart /> </PrivateRoute>}></Route> 
        <Route path="/wishlist" element={<PrivateRoute> <WishList/></PrivateRoute>}></Route> 
        <Route path="/allproducts" element={<AllProducts/>}></Route>
        {token ? <Route path="/allproducts" element={<AllProducts />}></Route> : <Route path="/login" element={<Login/>}></Route>}
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/logout" element={<PrivateRoute> <Logout /></PrivateRoute>}></Route>
        <Route path="/mockman" element={<MockAPI />}> </Route>
        <Route path="/sp/:productID" element={<SingleProduct />}> </Route>
        <Route path="*" element={<Navigate to="/allProducts" />} ></Route>
      </Routes>
      </Scroll>
      <Footer />
     </div>
     </>
  );
}

export default App;
