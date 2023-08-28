import React from "react";
import "../card-component/card.css";
import dataset from "../../images/dataset.png";
const Card = () => {
  return (
    <div className="card">
      <div className="card-header d-flex flex-row justify-content-center">
        <div className="card-image-container">
          <img src={dataset} alt="Card" className="dataset-image" />
          <div class="button-block">
            <button class="data-button">dataset</button>
          </div>
        </div>
        <div className="card-heading">
    <div className="heading-box">
            <h1>Employee Sales Meta Data Information</h1>
            </div>
        </div>
    
      </div>
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">This is a sample card with some content.</p>
        <a href="/" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
