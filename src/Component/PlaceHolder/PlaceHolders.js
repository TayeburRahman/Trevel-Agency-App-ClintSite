import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../Firebase/Hook/useAuth";
import "./PlaceHolder.css";

const PlaceHolders = () => {
  const { user } = useAuth();
  const { serviceId } = useParams();
  const [service, setService] = useState([]);
  const userEmail = user.email;
  const url = service.img;
  const campPrice = service.price;
  const campName = service.name;

  
  useEffect(() => {
    fetch("https://trevel-agency-app-server.onrender.com/service")
      .then((res) => res.json())
      .then((data) => setService(data.find((data) => data._id === serviceId)));
  }, [serviceId]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    data.userEmail = userEmail;
    data.url= url
    data.campPrice= campPrice
    data.campName= campName
    data.state = 'Pending..';
    
    fetch('https://trevel-agency-app-server.onrender.com/booking', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(result => {
        
        Swal.fire({
          title: 'Sweet!',
          text: 'Modal with a custom image.',
          imageUrl: 'https://unsplash.it/400/200',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })

      });
  };
  return (
    <div className="text-left p-5 ">
      <div className="From-Orders">
        <h2 className="pb-3 text-color-w">Booking Now</h2>
        <form className=" " onSubmit={handleSubmit(onSubmit)}>
          <h6>Your Name / Teem Name</h6>
          <input
            type="text"
            placeholder="Name"
            {...register("userName", { required: true, maxLength: 80 })}
          />
          <br />
          <br />
          <h6>Your Country</h6>
          <input
            type="text"
            placeholder="Country"
            {...register("country", { required: true, maxLength: 100 })}
          />
          <br />
          <br />
          <h6>Home Cty</h6>
          <input
            type="text"
            placeholder="Address"
            {...register("address", { required: true, maxLength: 100 })}
          />
          <br />
          <br />
          <h6>Your Email</h6>
          <input
            type="text"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <br />
          <br />
          <h6>Camp Name</h6>
          <input
            type="text"
            defaultValue={service ? service.name : ""}
            {...register("name")}
          />
          <br />
          <br />
          <h5>Price : {service.price}$</h5>
          <br />
          <input className="optionSubmit" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default PlaceHolders;
