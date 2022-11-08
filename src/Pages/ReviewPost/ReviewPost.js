import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const ReviewPost = ({course}) => {
    const {name, _id} = course;
    const {user} = useContext(AuthContext)
    // console.log(user)


    const handlePlaceReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const UserName = form.name.value;
        const email = form.email.value;
        const rating = form.rating.value;        
        const id = form.id.value;
        const comment = form.comment.value;
        
        const review = {
          id: id,
          name,
          UserName: UserName,
          email: email,
          rating: rating,
          comment: comment      
        };
    
    
        fetch("https://meet-your-trainer-server.vercel.app/reviews", {
        // fetch("http://localhost:5002/reviews", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(review),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              alert("Review Placed Successfully!");
              form.reset();
            }
          })
          .catch((err) => console.error(err));
      };
    
      return (
        <div>
            <h2 className="text-4xl text-center font-bold my-10 text-blue-700">Add Review</h2>
          <form onSubmit={handlePlaceReview} className='mb-48'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              <input name="name" defaultValue={user.displayName} readOnly type="text" placeholder="Your Full Name" className="input input-bordered w-full"/>
              <input name="email" defaultValue={user.email} readOnly type="email" placeholder="Email" className="input input-bordered w-full" required/>
              <input name="rating" type="text" placeholder="Rating" className="input input-bordered w-full" required/>         
              <input name="id" type="text" defaultValue={_id} readOnly placeholder="Id" className="input hidden input-bordered w-full" required/>         
            </div>
              <textarea name="comment" type="text" placeholder="Comment" className="input input-bordered w-full mt-5 h-28" required/>
            
            <input className="btn btn-outline btn-primary my-5 rounded-lg px-10 text-center" type="submit" value="Submit"/>
          </form>
        </div>
      );
    };

export default ReviewPost;