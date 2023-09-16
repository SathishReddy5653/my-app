import React from "react";
import { useCart } from "../../src/components/global-component/global.js";


const DisplayCartItems= ()=>{
 
    const { cartItems} = useCart();
    return(
        // <div> 
        //     {cartItems.map((item)=>(
        //        <h1>{item.node_heading}</h1>
        //     ))}
        // </div>
        <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.node_heading}</h3>
             
            </div>
          </div>
        ))}
      </div>
</div> 
    )}

 
    

export default DisplayCartItems;