import React from "react";
import img from "../../image/About-img-2.jpg";

const HomeFastSection = () => {
  return (
    <div className="container">
        <h1>Camping Experience</h1>
      <div className="row pt-5">
        <div className="col-md-6 col-sm-6">
          <div>
            <img src={img} width="70%" alt="" />
          </div>
        </div>
        <div className="col-md-6 col-sm-6 p-5 text-left space">
          <h2 className="mb-4 color-text">The perfect <br />  getaway from home</h2>
          <p>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim, rhoncus, imperdiet a,
            venenatis vitae, justo. Etiam ultricies nisi vel augue incididunt.Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeFastSection;
