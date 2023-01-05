import React from "react";
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
  const { reset, register, handleSubmit } = useForm();

  const onSubmit = (data) => { 
    fetch('https://trevel-agency-app-server.onrender.com/addService',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            if(result.insertedId){
                alert('Your Order Successfully Send');
                reset();
            } 
        })
        console.log(data)
  }

  return (
    <div>
      <div className="addService row mt-5 pb-5">
      <h1 className="addService-text p-3">Please Add a Serves</h1>
        <div className="col-md-5"></div>
        <div className="col-md-7 mt-4  margin-left">
          <form className="text-left ms-2" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name", { required: true, maxLength: 20 })}
              placeholder="Name"
            />{" "}
            <br /> <br />
            <input
              type="number"
              {...register("price")}
              placeholder="Price"
            />{" "}
            <br /> <br />
            <input
              type="text"
              {...register("members")}
              placeholder="Members"
            />{" "}
            <br /> <br />
            <input
              type="text"
              {...register("day")}
              placeholder="Day/T"
            />{" "}
            <br /> <br />
            <input {...register("img")} placeholder="Image url" /> <br /> <br />
            <textarea
              className="text-from description"
              {...register("description")}
              placeholder="Description"
            />{" "}
            <br /> <br />
            <input className="submit-from buttons ps-4 pe-4 p-2" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
