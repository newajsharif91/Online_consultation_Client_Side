import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import MyReviewDetails from './MyReviewDetails';

const MyReview = () => {
    const {user} = useContext(AuthContext)
    const [myReviews, SetMyReviews] = useState([])
    console.log(myReviews)

    useEffect(()=>{
        fetch(`https://meet-your-trainer-server-atik2788.vercel.app/reviews?email=${user.email}`)
        .then(res => res.json())
        .then(data => SetMyReviews(data))
    }, [user.email])

    return (
        <div>
            {myReviews.map(myReview => <MyReviewDetails
                key={myReview._id}
                myReview={myReview}
            ></MyReviewDetails>)
            }
        </div>
    );
};

export default MyReview;