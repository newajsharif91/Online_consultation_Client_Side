import React, { useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const{providerLogin, signIn,} = useContext(AuthContext)
  

  const googleProvider = new GoogleAuthProvider();

  const [error, setError] = useState();
  const navigate = useNavigate()
  
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // google log in
    const handleGoogleLogIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            navigate(from, {replace: true})
        })
        .catch(error =>{
           console.error(error)
          setError(error.message)
          })
    }

    
    const handleSignIn = event =>{
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;



    signIn(email, password)
    .then(result => {
      setError('')
      const user = result.user;
      
      const currentUser = {
        email: user.email
      }
      
      console.log(currentUser)
      

      // form.reset();      
    })

    .catch(error=> {
      console.error(error)
      setError(error.message)
    })
    }    


  return (
    <div>
      <Form onSubmit={handleSignIn} className="mt-20 mb-40 lg:w-7/12 md:w-7/12 w-11/12 mx-auto form-bg rounded-lg">
        <div className="">
          <div className="text-center">
            <h1 className="text-5xl font-bold pt-8 text-blue-600">Login now!</h1>
            <p className="py-6 text-lg font-semibold">
              Don't have an account? 
              <span> <Link to='/signup' className="color-text text-orange-500 font-bold">Sign Up</Link></span>
            </p>


          </div>
          <div className=" shadow-2xl bg-base-100 form-bg ">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text whiteColor">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text whiteColor">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover whiteColor">
                    Forgot password?
                  </Link>
                </label>
                <label className="label text-red-700">                  
                    {error}                  
                </label>
                
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>

              <div className="flex flex-col w-full border-opacity-50">
                <div className="divider whiteColor">OR</div>
              </div>


              <p className="">
                <Link className="font-bold  btn btn-outline btn-primary " onClick={handleGoogleLogIn}>Signin With Google</Link>
            </p>


            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
