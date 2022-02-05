import React from "react";

export const Polaroid = ({ img }) => {
  return (
    <div className="col-6">
      <div className=" card p-4 border-rounded m-5" style={{ height: "400px" }}>
        <img
          src={img}
          className="card-img-top"
          alt="..."
          style={{ width: "300px" }}
        />
        <div className="card-body">
          <h5 className="card-title text-center">Card title</h5>
        </div>
      </div>
    </div>
  );
};
