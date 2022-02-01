import React from "react";

const Card = () => (
  <div
    className="card border-0 text-center mx-5"
    style={{ width: "18rem", marginTop: "100px" }}
  >
    <img
      src="https://via.placeholder.com/150"
      className="card-img-top  rounded-circle"
      alt="..."
      style={{ marginTop: "-50%" }}
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
