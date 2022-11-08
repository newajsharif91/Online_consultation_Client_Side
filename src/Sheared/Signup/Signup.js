import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Signup = () => {
    const navigate = useNavigate();

    const {signUp, user, setUser, profileUpdate} = useContext(AuthContext)
  
    const [error, setError] = useState()
  
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'; 
  
  
    // sign up
    const handleSignUp = (event) =>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photoURL = form.photoURL.value;
      const email =form.email.value;
      const password =form.password.value;
  
      signUp(email, password)
      .then(result =>{
        const user = result.user; 
        setUser(user)
        console.log(user);
        navigate(from, {replace: true})      
        form.reset()
  
        handleUpdateProfile(name, photoURL)
      })
  
      .catch(error =>{
        console.error(error)
        setError(error.message)
      })
    }
  
  
    const handleUpdateProfile = (name, photoURL) =>{
      const profile = {
        displayName : name,
        photoURL : photoURL
      }
      profileUpdate(profile)
      .then(() => {})
      .catch(error => console.error(error))
  
    }
  
    return (
      <div>
        <Form onSubmit={handleSignUp} className="mt-20 mb-40 w-11/12 md:w-9/12 lg:w-9/12 mx-auto">
          <div className="">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-blue-600">Sign Up</h1>
              <p className="pt-6 pb-3 text-lg font-semibold">
                Already Have an Account?
                <span>
                  {" "}
                  <Link to="/login" className="color-text text-orange-600 font-bold">
                    Login
                  </Link>
                </span>
              </p>
            </div>
  
            <div className=" flex-shrink-0 w-full shadow-2xl form-bg">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text whiteColor">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered"
                    name="name"
                  />
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text whiteColor">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    name="photoURL"
                  />
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text whiteColor">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text whiteColor">Password</span>
                  </label>
                  <input
                    type="password"
  
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <Link href="#" className="label-text-alt link link-hover whiteColor">
                      Forgot password?
                    </Link>
                  </label>
                  <label  className="label text-red-800 text-2xl">
                    {error}
                  </label>
                </div>
  
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary whiteColor">Sign Up</button>
                  
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    );
  };
export default Signup;