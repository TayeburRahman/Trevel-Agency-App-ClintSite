import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PlaceHolders from "../../PlaceHolder/PlaceHolders";
 

const ServiceDtl = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState([]);
   useEffect(() => {
    fetch("https://trevel-agency-app-server.onrender.com/service")
      .then((res) => res.json())
      .then((data) => setService(data.find((data) => data._id === serviceId)));
  }, [serviceId]);
  return (
      <div>
        <div className="row text-left">
          <div className="col-md-8 p-5">
            <div className=" background-color">
              <div className=" ps-3 pe-5 p-3">
                <img src={service.img} width="100%" alt="" />
                <br />
                <br />
                <h2 className=" p-2 text-title rounded addService-text">{service.name}</h2>
                <h6 className=" p-2">{service.description}</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <PlaceHolders></PlaceHolders>
        </div>
        </div>
      </div>
  );
};

export default ServiceDtl;
