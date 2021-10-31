import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Firebase/Hook/useAuth";
import './Login.css'
import { FaGoogle } from 'react-icons/fa';


const Login = () => {
  const {signInUsingGoogle, user} = useAuth();

  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location.state?.from || "/";
  const handlePasGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
     <div className=" heder-login">
       <div className="row from-login">
      <div className="col-md-4 col-sm-12">

      </div>
      <div class="card text-center col-md-4 mt-5 col-sm-12">
        <div class="card-header">
          <h5>Login Your Account</h5>
        </div>
        <div class="card-body">
           <p></p>
          <div class="d-grid gap-2 pb-2 col-6 mx-auto">
            <button
             onClick={handlePasGoogleLogin}
             class="btn btn-primary" type="button">
              <FaGoogle className="me-3"/> Google Sign In
            </button>
          </div>
        </div>
        <div class="card-footer text-muted">{user.email}</div>
      </div>
    </div>
     </div>
     
  );
};

export default Login;
