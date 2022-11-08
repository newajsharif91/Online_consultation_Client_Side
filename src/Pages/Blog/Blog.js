import React from "react";

const Blog = () => {
  return (
    <div className="w-10/12 mx-auto mt-20 mb-20">

        <div>
        <div className="w-10/12 mx-auto mt-20">
        <div className=" lg:flex bg-base-100 shadow-2xl p-0 lg:pl-10 rounded-lg">
            <div className="w-2/5 mx-auto">
                <figure>
                    <img src="https://media.tenor.com/g6ZKqhZUoQ8AAAAM/boy-cute.gif" alt="Album" />
                </figure>
            </div>

          <div className="card-body">
            <h2 className="card-title text-3xl font-bold darkWithText">Have your any question??</h2>          
            <p className="text-2xl font-bold text-center mt-5 darkWithText">Just ask!</p>    
          </div>

        </div>        
      </div>
        </div>



    <div className="mt-20">
      <div tabIndex={0} className="collapse group mt-3">
        <div className="collapse-title bg-green-700 rounded-lg text-primary-content group-focus:bg-purple-700 group-focus:text-secondary-content">
          01. What is cors?
        </div>
        <div className="collapse-content bg-green-700 rounded-lg text-primary-content group-focus:bg-purple-700 group-focus:text-secondary-content">
          <p>
            ORS is a node.js package for providing a Connect/Express middleware
            that can be used to enable CORS with various options. <br /> <br />
            Node.js is an open-source and cross-platform runtime used when
            executing JavaScript code on the server-side. One of the popular
            Node.js server frameworks is Express. Implementing CORS in Node.js
            helps you access numerous functionalities on the browser. Express
            allows you to configure and manage an HTTP server to access
            resources from the same domain.
          </p>
        </div>
      </div>

      <div tabIndex={0} className="collapse group mt-3">
        <div className="collapse-title bg-green-700   rounded-lg text-primary-content group-focus:bg-purple-700 group-focus:text-secondary-content">
          02. Why are you using firebase? <br />What other options do you have to implement authentication?
        </div>
        <div className="collapse-content bg-green-700 rounded-lg text-primary-content group-focus:bg-purple-700 group-focus:text-secondary-content">
          <p>
            Give users a quick, intuitive sign-in process with Firebase
            Authentication. <br />

            Allow users to sign in to your app with their Facebook, Twitter,
            Google, or GitHub account with less than 5 minutes of work. <br />
            <br />
            Track each step of your onboarding flow to improve the experience. <br /> 
            Use Google Analytics for Firebase to log events at every step of
            your onboarding flow, create funnels to see where users are dropping
            off, and use Remote Config to make changes to your app to see how it
            affects conversions. <br /><br />
            1. Password-based authentication· <br /> 2. Multi-factor authentication· <br /> 3. Certificate-based authentication· <br /> 4. Biometric authentication· br 5. Token-based authentication.
          </p>
        </div>
      </div>

      <div tabIndex={0} className="collapse group mt-3">
        <div className="collapse-title bg-primary rounded-lg text-primary-content group-focus:bg-indigo-700 group-focus:text-secondary-content">
          0.3 How does the private route work?
        </div>
        <div className="collapse-content bg-primary rounded-lg text-primary-content group-focus:bg-indigo-700 group-focus:text-secondary-content">
          <p>
            Private Route <br />
            PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.
          </p>
        </div>        
      </div>

      <div tabIndex={0} className="collapse group mt-3">
        <div className="collapse-title bg-primary rounded-lg text-primary-content group-focus:bg-indigo-700 group-focus:text-secondary-content">
          0.4 What is Node? <br /> How does Node work?
        </div>
        <div className="collapse-content bg-primary rounded-lg text-primary-content group-focus:bg-indigo-700 group-focus:text-secondary-content">
          <p>Node.js is a lean, fast, cross-platform JavaScript runtime environment that is useful for both servers and desktop applications. <br />
          Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br /> <br />
          Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

          </p>
        </div>        
      </div>

      </div>

    </div>
  );
};

export default Blog;
