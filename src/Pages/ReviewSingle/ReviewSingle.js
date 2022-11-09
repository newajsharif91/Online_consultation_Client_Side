import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewSingleDetails from './ReviewSingleDetails/ReviewSingleDetails';

const ReviewSingle = () => {
    const service = useLoaderData()
    const [reviews, setReview] = useState([])
    console.log(reviews)


    useEffect(()=>{
        fetch(`https://meet-your-trainer-server-atik2788.vercel.app/reviews?serviceId=${service._id}`
        )
        .then(res => res.json())
        .then(data => setReview(data))
    }, [service._id])

     return (
        <div>
            <h2 className='text-3xl font-bold mt-20'>Users Reviews...</h2>
           
           <div className='mt-12'>
            {
                reviews.map(review => 
                <ReviewSingleDetails
                key={review._id}
                review={review}
                ></ReviewSingleDetails>)
            }
           </div>

        </div>
    );
};

export default ReviewSingle;