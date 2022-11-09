import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import ReviewPost from '../ReviewPost/ReviewPost';
import ReviewSingle from '../ReviewSingle/ReviewSingle';
import { AuthContext } from '../../context/AuthProvider';

const ReviewService = () => {
    const {user} = useContext(AuthContext)
    const course = useLoaderData();
    const {name, _id, img, description, price, rating, members} = course;
    console.log(rating)


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
                    { user?.uid?
                    <>  
                        <ReviewPost course={course}></ReviewPost>
                    </>
                    :
                        <span>
                            <p className='text-4xl font-bold text-center'>Please Log in to add Review</p>
                            <Link to='/login'><button className="btn btn-outline btn-primary py-0 px-10 mt-10">Login</button></Link>
                        </span>

                    }
                </div>

                <div>
                    <ReviewSingle></ReviewSingle>
                </div>
            </div>

        </div>
    );
};

export default ReviewService;