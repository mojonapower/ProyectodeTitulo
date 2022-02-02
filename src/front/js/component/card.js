import React from "react";

const Card = () => (
  <div
    className="card border-0 text-center mx-5 bg-transparent "
    style={{ width: "18rem" }}
  >
    <img
      src="https://via.placeholder.com/100"
      className="card-img-top  rounded-circle"
      alt="..."
    />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
);
export default Card;
