import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyReviewDetails = ({myReview, handleDeleteReview, handleUpdateUser}) => {
    const {name, comment, _id, rating} = myReview;
    // console.log(_id)

    

    return (
        <div className='my-20 w-11/12 lg:w-2/4 mx-auto'>
            <div className="card bg-base-100 shadow-xl mt-10">
                <div className="card-body">
                    <div className='flex'>
                        <h2 className="card-title">Service Name: {name}</h2>
                    </div>
                        <p className='flex'>Rating:<FaStar className='mx-2 text-yellow-300'></FaStar>{rating}</p>
                    <p className='mt-3'><span className='font-bold'>Comment:</span> {comment}</p>
                </div>
                <div className='mb-7'>
                <Link to={`/reviews/${_id}`}><button class="btn btn-outline btn-primary px-10 mb-2 ml-7">Edit</button></Link>

                <button onClick={()=> handleDeleteReview(_id)} class="btn btn-outline btn-error px-10 mb-2 ml-7">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyReviewDetails;