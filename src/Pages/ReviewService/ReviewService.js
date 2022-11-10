import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import ReviewSingle from '../ReviewSingle/ReviewSingle';
import { AuthContext } from '../../context/AuthProvider';

const ReviewService = () => {
    const {user} = useContext(AuthContext)
    const course = useLoaderData();
    const {name, _id, img, description, price, rating, members} = course;
    console.log(course)


    const [reviews, setReviews] = useState([])

    
    useEffect(()=>{
        fetch(`https://meet-your-trainer-server-atik2788.vercel.app/reviews2?serviceId=${course._id}`
        )
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [course._id])




    // review post***************
    const handlePlaceReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const UserName = form.name.value;
        const email = form.email.value;
        const rating = form.rating.value;        
        const id = form.id.value;
        const comment = form.comment.value;
        
        const review = {
          serviceId: id,
          name,
          photoURL: user.photoURL,
          UserName: UserName,
          email: email,
          rating: rating,
          comment: comment      
        };



        fetch("https://meet-your-trainer-server.vercel.app/reviews", {
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
        <div className="lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 mt-20 mb-40">
            <div>
                <div className="hero  bg-base-200 rounded-lg mx-auto">
                    <div className="mx-auto p-5">
                        <img src={img} alt="" className="rounded-lg shadow-2xl "/>   
                        <div>
                            <h1 className="text-3xl mt-5 font-bold">{name}</h1>
                            <p className="py-6">{description}</p>
                            <p className="py-2">Members: {members}</p>
                            <div className='flex justify-between'>
                                <p className="">Price: ${price} /week</p>
                                <p className="py-2 flex">Ratings: <FaStar className='mx-2 text-yellow-300'></FaStar> {rating}</p>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>

            <div className='w-10/12 mx-auto'>

                <div className='mx-auto'>
                    { user && user.uid?
                    <>  
                        <div>
                            <h2 className="text-4xl text-center font-bold my-10 text-blue-700">Add Review</h2>
                            <form onSubmit={handlePlaceReview} className='mb-20'>
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
                    </>
                    :
                        <span>
                            <p className='text-4xl font-bold text-center'>Please Log in to add Review</p>
                            <Link to='/login'><button className="btn btn-outline btn-primary py-0 px-10 mt-10">Login</button></Link>
                        </span>

                    }
                </div>

                <div>
                    <ReviewSingle reviews={reviews}></ReviewSingle>
                </div>
            </div>

        </div>
    );
};

export default ReviewService;