import './App.css';
import React, { useEffect } from "react";
import Navbar from './components/Navbar/Navbar';
import Product from './components/Products/Product';
import { useSelector, useDispatch } from "react-redux";
import { total } from "./components/state/Slice/CartSlice";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(total());
  }, [cartItems, dispatch]);
  return (
    <div className="App">
      <Navbar />
      <Product />
    </div> 
  );
}

export default App;
