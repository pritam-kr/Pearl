import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import {Footer, Navigation} from "./component/index"
import {Login, Signup, AllProducts, WishList, Home, MyCart, Logout, SingleProduct, Payment} from "./pages/index"
import MockAPI from "./component/Mockman/Mockman"
import {useAuthContext, PrivateRoute} from "./Context/index"
import {Scroll} from "./utils/Scroll"
import {Toaster} from "react-hot-toast"
 

function App() {

  const {token} = useAuthContext()

  return (
    <> 
    <Toaster  position="top-right"  toastOptions={{style: {fontSize: "1.2rem"}, duration: 800,}} />
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
        <Route path="/successful/:paymentID" element={<PrivateRoute><Payment /></PrivateRoute>} />
      </Routes>
      </Scroll>
      <Footer />
     </div>
     </>
  );
}

export default App;
