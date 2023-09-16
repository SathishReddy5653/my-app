import React from "react";
import "../card-component/card.css";
// import dataset from "../../images/dataset.png";
// import certified from "../../images/certified.jpg";
// import registered from "../../images/registered.jpeg";
import pinned from "../../images/pin.png";
import share from "../../images/share.png";
import viewnode from "../../images/visual-design.png";
import cart from "../../images/shopping-cart.png";
// import { useState } from "react";
// const Card = () => {
//   return (
//     <div className="card">
//       <div className="card-body">
//         <div className="d-flex flex-row">
//           <div className="d-flex flex-row">
//             <div>
//               <div className="dataset-details d-flex flex-column">
//                 <div>
//                   <img src={dataset} alt="Card" className="dataset-image" />
//                 </div>
//                 <div>
//                   <button class="data-button">dataset</button>
//                 </div>
//               </div>

//               {/* <div className="certified-details d-flex flex-row"> */}

//               <div className="d-flex flex-column">
//                 <div>
//                   <img
//                     src={certified}
//                     alt="certified-logo"
//                     width="30px"
//                     height="30px"
//                   />
//                 </div>
//                 <div>
//                   <p>Certified</p>
//                 </div>
//               </div>

//               <div className="d-flex flex-column">
//                 {/* <div className="registered details d-flex flex-row"> */}
//                 <div>
//                   <img
//                     src={registered}
//                     alt="registered-logo"
//                     width="30px"
//                     height="30px"
//                   />
//                   "
//                 </div>
//                 <div>
//                   <p>Registered</p>
//                 </div>
//               </div>
//               <div>
//                 <h3> 0% </h3>
//               </div>
//             </div>

//             <div>
//               <div className="node-heading">
//                 <h1>Employee Sales Meta Data Information</h1>
//               </div>
//               <div className=" my-buttons d-flex flex-row">
//                 <button className="alation">Alation</button>
//                 <p className="createdby">Curated by Sathish</p>
//               </div>
//             </div>
//           </div>{" "}
//           {/*flex-row completed */}
//           <div className="addtocart-button d-flex flex-column">
//             <button className="cart">
//               Add to Cart{" "}
//               <img src={cart} alt="pinned" width="40px" height="40px" />
//             </button>
//             <button className="save">
//               Add to Saved{" "}
//               <img src={pinned} alt="pinned" width="40px" height="40px" />{" "}
//             </button>
//             <button className="share">
//               Share <img src={share} alt="Share" width="40px" height="40px" />{" "}
//             </button>
//             <button className="view">
//               View Node{" "}
//               <img src={viewnode} alt="Share" width="40px" height="40px" />{" "}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import { useCart } from "../global-component/global";

const Cards = (p) => {
  // const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();
  // const handleAddToCart = () => {
  //   addToCart();
  // };

  return (
    <div className="card ">
      <div className="card-body">
        <div className="d-flex flex-row">
          <div className="d-flex flex-row">
            <div>
              <div className="dataset-details d-flex flex-column">
                <div>
                  <img src={p.image} alt="Card" className="dataset-image" />
                </div>
                <div>
                  <button class="data-button">{p.buttonName}</button>
                </div>
              </div>

              {/* <div className="certified-details d-flex flex-row"> */}

              <div className="d-flex flex-column">
                <div>
                  <img
                    src={p.certified_logo}
                    alt="certified-logo"
                    width="30px"
                    height="30px"
                  />
                </div>
                <div>
                  <p>{p.certified_text}</p>
                </div>
              </div>

              <div className="d-flex flex-column">
                {/* <div className="registered details d-flex flex-row"> */}
                <div>
                  <img
                    src={p.register_logo}
                    alt="registered-logo"
                    width="30px"
                    height="30px"
                  />
                  "
                </div>
                <div>
                  <p>{p.register_text}</p>
                </div>
              </div>
              <div>
                <h3> {p.meta_quality}% </h3>
              </div>
            </div>

            <div>
              <div className="node-heading">
                <h1>{p.node_heading}</h1>
              </div>
              <div className=" my-buttons d-flex flex-row">
                <button className="alation">{p.button_alation}</button>
                <p className="createdby">Curated by {p.name}</p>
              </div>
            </div>
          </div>
          {/*flex-row completed */}
          <div className="addtocart-button d-flex flex-column">
            <button className="cart" onClick={()=>{addToCart(p)}}>
              Add to Cart
              <img src={cart} alt="pinned" width="40px" height="40px" />
            </button>
            <button className="save">
              Add to Saved
              <img src={pinned} alt="pinned" width="40px" height="40px" />{" "}
            </button>
            <button className="share">
              Share <img src={share} alt="Share" width="40px" height="40px" />{" "}
            </button>
            <button className="view">
              View Node
              <img src={viewnode} alt="Share" width="40px" height="40px" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
