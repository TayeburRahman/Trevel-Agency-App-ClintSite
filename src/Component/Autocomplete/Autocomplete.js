import React from "react";
import "./autocmplete.css";
import { FiCamera } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";

const Autocomplete = () => {
  return (
    <div className=" d-flex">
      <div className="container row">
        <div className="col-md-2"></div>
        <div className="col-md-8 shadow p-3 row mb-5 bg-body rounded cartItem">
          <div className="col-md-4 col-sm-12 p-2 Autocomplete row">
            <div className="col-4">
              <FiCamera className=" mt-2 icon-sizes ms-4" />
            </div>
            <div className="col-8">
              <h6 className="text-success  mt-3">Photography</h6>
            </div>
          </div>
          <div className="col-md-4 p-2 col-sm-12 border-start row Autocomplete">
            {" "}
            <div className="col-4">
              <FiUsers className=" mt-2 icon-sizes ms-4" />
            </div>
            <div className="col-8">
              <h6 className=" text-warning me-2  mt-3">Stunning</h6>
            </div>
          </div>
          <div className="col-md-4 p-2 col-sm-12 border-start row Autocomplete">
            {" "}
            <div className="col-4">
              <FiShoppingBag className=" mt-2 ms-4 icon-sizes" />
            </div>
            <div className="col-8">
              <h6 className="text-success mt-3 me-2">Memories</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Autocomplete;
