import React, { useEffect, useState } from "react";
import useAuth from "../../Firebase/Hook/useAuth";
import "./MyOrder.css";

const MyOrders = () => {
  const { user } = useAuth();
  const email = user.email;
  const [orders, setOrders] = useState([{}]);
  console.log(orders);
  useEffect(() => {
    fetch(`https://trevel-agency-app-server.onrender.com/booking/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [email]);
  return (
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6 m-5 ">
      <h3 className="text-left mb-4 text-color-b p-3">Check out your Booking</h3>
        {orders &&
          orders.map((oder, index) => (
            <div class="card mb-3 rounded">
              <div class="row g-0">
                <div class="col-md-4 bg-custom rounded-start">
                  <img width="100%" src={oder.url} alt="" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h6>{oder.campName}</h6>
                    <h6>{oder.campPrice}$</h6>
                    <p class="card-title">{oder.userName}</p>
                    <p class="card-text">
                      <small class="text-muted pt-5">
                        Booking: {oder.state}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div></div>
    </div>
  );
};

export default MyOrders;
