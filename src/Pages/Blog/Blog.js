import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {

  useTitle('Blog')

  return (
    <div className="w-10/12 mx-auto mt-20 mb-20">

        <div>
        <div className="w-10/12 mx-auto mt-20">
        <div className=" lg:flex bg-base-100 shadow-2xl p-0 lg:pl-10 rounded-lg">
            <div className="w-3/5 mx-auto">
                <figure>
                    <img src="https://i.ibb.co/PtDjwSZ/121708-question.gif" alt="Album" />
                </figure>
            </div>

          <div className="card-body lg:mt-36">
            <h2 className="card-title text-3xl font-bold darkWithText">Have your any question??</h2>          
            <p className="text-2xl font-bold text-center mt-5 darkWithText">Just ask!</p>    
          </div>

        </div>        
      </div>
        </div>



    <div className="mt-20">
      <div tabIndex={0} className="collapse group mt-3">
        <div className="collapse-title bg-green-700 rounded-lg text-primary-content group-focus:bg-purple-700 group-focus:text-secondary-content">
          01. Difference between sql and nosql..
        </div>
        <div className="collapse-content bg-green-700 rounded-lg text-primary-content group-focus:bg-purple-700 group-focus:text-secondary-content">
          <p>
          SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.HTTP server to access
            resources from the same domain. <br />
            Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes. These are useful generalizations, but it’s important to note:

            SQL databases can be scaled horizontally as well, though sharding or partitioning logic is often the user’s onus and not well supported.
            NoSQL technologies are diverse and while many rely on the master-slave architecture, options for scaling vertically also exist.
            Savings made using more efficient data structures can overwhelm differences in scalability; most important is to understand the use case and plan accordingly.
          </p>
        </div>
      </div>

      <div tabIndex={0} className="collapse group mt-3">
        <div className="collapse-title bg-green-700   rounded-lg text-primary-content group-focus:bg-purple-700 group-focus:text-secondary-content">
          02. What is JWT, and how does it work?
        </div>
        <div className="collapse-content bg-green-700 rounded-lg text-primary-content group-focus:bg-purple-700 group-focus:text-secondary-content">
          <p className="font-bold">
          What Are Tokens? <br /> <br />
          Now that you understand JSON as a data text format, you may be wondering What are tokens? To put it simply, a token is a string of data that represents something else, such as an identity. In the case of authentication, a non-JWT based token is a string of characters that allow the receiver to validate the sender’s identity. The important distinction here is lack of meaning within the characters themselves. <br /><br />
          </p>

          <p className="font-bold">
              How JWT Works? <br /> <br />
              JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
             A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. 
          </p>
        </div>
      </div>

      <div tabIndex={0} className="collapse group mt-3">
        <div className="collapse-title bg-green-700 rounded-lg text-primary-content group-focus:bg-purple-700 group-focus:text-secondary-content">
          0.3 What is the difference between javascript and NodeJS ?
        </div>
        <div className="collapse-content bg-green-700 rounded-lg text-primary-content group-focus:bg-purple-700 group-focus:text-secondary-content">
          <p>
          1. NodeJS : <br />
          NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. <br /><br />

          2. JavaScript : <br />
          Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. 
          </p>
        </div>        
      </div>


      <div tabIndex={0} className="collapse group mt-3">
        <div className="collapse-title bg-green-700 rounded-lg text-primary-content group-focus:bg-purple-700 group-focus:text-secondary-content">
        How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content bg-green-700 rounded-lg text-primary-content group-focus:bg-purple-700 group-focus:text-secondary-content">
          <p>Node.js is a lean, fast, cross-platform JavaScript runtime environment that is useful for both servers and desktop applications. <br />
          When I was new in the Node.js world, I was wondering know how many requests can actually handle my Node.js application in production (as a real-world app). Or how many server instances do I need to handle a specific amount of traffic.

          Last year I read something very interesting for me in an article from a unicorn company PicsArt. They handle 40K requests per second having Node.js (mostly) for the backend.

          </p>
        </div>        
      </div>

      </div>

    </div>
  );
};

export default Blog;
