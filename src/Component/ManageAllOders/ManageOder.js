import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Manageorder = () => {
  const [orders, setOrders] = useState([{}]);
  const [isDelete, setIsDelete] = useState(false);
  const [isUpdate, setIsUpdate] =useState(null)
  useEffect(() => {
    fetch("https://shrieking-labyrinth-61643.herokuapp.com/booking")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isDelete, isUpdate]);

  const handleDeleteOrders = (id) => {
    const url = `https://shrieking-labyrinth-61643.herokuapp.com/booking/${id}`;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log("dltId", result);
            if (result.deletedCount) {
              setIsDelete(true);
            } else {
              setIsDelete(false);
            }
          });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const handleUpdateOrders = (id) =>{
      console.log(id)
    id.state = 'Approved'
    const url = `http://localhost:5000/booking/${id._id}`;
    fetch(url,{
    method: "PUT",
    headers:{ "content-type": "application/json" },
    body: JSON.stringify(id),
    })
    .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
            alert('Update Successful')
            setIsUpdate(true);
        } else {
            setIsUpdate(false);
        }
      });
  }
  return (
    <div className="row ">
      <h4 className="bg-secondary text-light mt-3 p-3">Admin</h4>
      <div className="col-md-3"></div>
      <div className="col-md-6 mt-3 m-5 text-left">
      <h3 className="text-success pb-2">Booking List</h3>
        {orders &&
          orders.map((order, index) => (
            <div class="card mb-3 rounded">
              <div class="row g-0">
                <div class="col-md-4 bg-custom rounded-start">
                  <img width="100%" src={order.url} alt="" />
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h5>{order.campName}</h5>
                    <h5>{order.campPrice}$</h5>
                    <h6 class="card-title">{order.userName}</h6>
                    <p class="card-text">
                      <small class="text-muted pt-5">
                        Booking: {order.state}
                      </small>
                    </p>
                  </div>
                </div>
                <div class="col-md-2 pe-3 d-grid buttons-card-manage">
                  <button
                  onClick={() => handleUpdateOrders(order)}
                  type="button" class="btn btn-outline-success bt-1">
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteOrders(order._id)}
                    type="button"
                    class="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div></div>
    </div>
  );
};

export default Manageorder;
