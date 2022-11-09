import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewSingleDetails = ({review}) => {
    const {UserName, rating, comment, photoURL } = review;
    // console.log(photoURL)

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mt-10">
                <div className="card-body">
                    <div className='flex'>
                        <h2 className="card-title">{UserName}</h2>
                        <img src={photoURL} alt="" />
                        <p className='flex mx-10'>Rating:<FaStar className='mx-2 text-yellow-300'></FaStar>{rating}</p>
                    </div>
                    <p className='mt-6'><span className='font-bold'>Comment:</span> {comment}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewSingleDetails;