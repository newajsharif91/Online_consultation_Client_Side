import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import MyReviewDetails from './MyReviewDetails';

const MyReview = () => {
    const {user} = useContext(AuthContext)
    const [myReviews, SetMyReviews] = useState([])
    // console.log(myReviews)

    useEffect(()=>{
        fetch(`https://meet-your-trainer-server-atik2788.vercel.app/reviews?email=${user.email}`)
        .then(res => res.json())
        .then(data => SetMyReviews(data))
    }, [user.email])


        // delete review
        const handleDeleteReview = id =>{
            const agree = window.confirm('Are you want to delete this review??')
            if(agree){
                fetch(`https://meet-your-trainer-server-atik2788.vercel.app/reviews/${id}`, {
                    method: "DELETE",
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        alert("User Deleted Successfully!")
                        const remaining = myReviews.filter(rev => rev._id !== id)
                        SetMyReviews(remaining)
                    }
                })
            }
        }
    




    return (
        <div className='min-h-screen mt-20'>

            {
                myReviews.length === 0?
                <>
                    <img className="h-80 mx-auto text-center" src="https://i.ibb.co/vXmfRwM/87896-frequently-asked-questions.gif" alt="" />
                    <h2 className='text-5xl mt-5 font-bold text-center'>Not found any review by YOU!!</h2>
                </>
                :
                <>
                    {myReviews.map(myReview => 
                    <MyReviewDetails
                    key={myReview._id}
                    myReview={myReview}
                    handleDeleteReview={handleDeleteReview}
                    ></MyReviewDetails>
                    )}
                </>
            }


        </div>
    );
};

export default MyReview;