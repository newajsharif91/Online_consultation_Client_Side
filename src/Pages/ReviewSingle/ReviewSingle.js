import React from 'react';
import ReviewSingleDetails from './ReviewSingleDetails/ReviewSingleDetails';

const ReviewSingle = ({reviews}) => {


     return (
        <div>
            <h2 className='text-3xl font-bold mt-20'>Users Reviews...</h2>
           
           <div className='mt-12'>
            {
                reviews.length === 0 ?
                  <div>
                    <h3>not found</h3>
                  </div>
                :
                <>
                    {reviews.map(review => 
                    <ReviewSingleDetails
                    key={review._id}
                    review={review}
                    ></ReviewSingleDetails>)
                        }
                </>
            }

           </div>

        </div>
    );
};

export default ReviewSingle;