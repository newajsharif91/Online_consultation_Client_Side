import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import ReviewPost from '../ReviewPost/ReviewPost';

const ReviewService = () => {
    const course = useLoaderData();
    const {name, _id, img, description, price, rating, members} = course;

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

            <div className='mx-auto'>
                <ReviewPost course={course}></ReviewPost>
            </div>

        </div>
    );
};

export default ReviewService;