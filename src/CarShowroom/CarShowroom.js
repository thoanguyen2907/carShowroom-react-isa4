import React from "react";

export default function CarShowroom() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-7">
          <img
            style={{width: "100%"}}
            src="./carbasic/products/black-car.jpg"
            alt="black_car"
          />
        </div>
        <div className="col-5">
          <div className="card text-dark">
            <div className="card-header text-primary">Exterior Color</div>
            <div className="card-body">
              <div
                className="row border border-link pt-2 pb-2 mt-2"
                onClick={() => {}}
                style={{cursor: "pointer"}}
              >
                <img
                  className="col-2"
                  src="./carbasic/icons/icon-black.jpg"
                  alt="black_icon"
                />
                <div className="col-10">
                  <h3>Crystal Black</h3>
                  <p>Pearl</p>
                </div>
              </div>
              <div
                className="row border border-link pt-2 pb-2 mt-2"
                onClick={() => {}}
                style={{cursor: "pointer"}}
              >
                <img
                  className="col-2"
                  src="./carbasic/icons/icon-steel.jpg"
                  alt="steel"
                />
                <div className="col-10">
                  <h3>Crystal Black</h3>
                  <p>Pearl</p>
                </div>
              </div>
              <div
                className="row border border-link pt-2 pb-2 mt-2"
                onClick={() => {}}
                style={{cursor: "pointer"}}
              >
                <img
                  className="col-2"
                  src="./carbasic/icons/icon-silver.jpg"
                  alt="silver_icon"
                />
                <div className="col-10">
                  <h3>Crystal Black</h3>
                  <p>Pearl</p>
                </div>
              </div>
              <div
                className="row border border-link pt-2 pb-2 mt-2"
                onClick={() => {}}
                style={{cursor: "pointer"}}
              >
                <img
                  className="col-2"
                  src="./carbasic/icons/icon-red.jpg"
                  alt="red_icon"
                />
                <div className="col-10">
                  <h3>Crystal Black</h3>
                  <p>Pearl</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
