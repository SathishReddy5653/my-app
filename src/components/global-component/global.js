import React, { useState } from "react";
import { useContext } from "react";

import dataset from "../../images/dataset.png";
import certified from "../../images/certified.jpg";
import registered from "../../images/registered.jpeg";

let cardDetails = [
  {
    id: 101,
    image: dataset,
    buttonName: "DataSet",
    certified_logo: certified,
    certified_text: "Certified",
    register_logo: registered,
    register_text: "Registered",
    meta_quality: 20,
    node_heading: "Employee Salary Details",
    button_alation: "Alation",
    name: "Sathish",
  },
  {
    id: 102,
    image: dataset,
    buttonName: "MyDataSet",
    certified_logo: certified,
    certified_text: "Certified",
    register_logo: registered,
    register_text: "Registered",
    meta_quality: 50,
    node_heading: "Purchase Details",
    button_alation: "Alation",
    name: "Jeevitha",
  },
  {
    id: 103,
    image: dataset,
    buttonName: "DataSet",
    certified_logo: certified,
    certified_text: "Certified",
    register_logo: registered,
    register_text: "Registered",
    meta_quality: 80,
    node_heading: "Sales of the Month",
    button_alation: "Alation",
    name: "Sai Kiran Reddy",
  },
  {
    id: 104,
    image: dataset,
    buttonName: "DataSet",
    certified_logo: certified,
    certified_text: "Certified",
    register_logo: registered,
    register_text: "Registered",
    meta_quality: 90,
    node_heading: "Recordings of July",
    button_alation: "Ranger",
    name: "Saha",
  },
];



export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  
let [cartItems,setCartItems]=useState([]);
  
  const addToCart = (p) => {
    
   
  setCartItems([...cartItems,p]);
  setCartCount(cartCount + 1);
  
}
console.log(cartItems);
  
  return (
    <CartContext.Provider value={{cardDetails,addToCart, cartCount,cartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}
