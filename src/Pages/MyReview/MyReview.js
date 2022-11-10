import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewDetails from './MyReviewDetails';

const MyReview = () => {

    useTitle('MyReview')

    const [loading, setLoading] = useState(true)

    const {user, logOut} = useContext(AuthContext)
    const [myReviews, SetMyReviews] = useState([])
    // console.log(myReviews)

    useEffect(()=>{
        fetch(`https://meet-your-trainer-server-atik2788.vercel.app/reviews?email=${user.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('trainer-token')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403){
                logOut()                
            }
           return res.json()
        })
        .then(data => {
            SetMyReviews(data)
            setLoading(false);
        })
    }, [logOut, user.email])


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
                        setLoading(false);
                    }
                })
            }
        }
    

        // update User
        const handleUpdateUser = event =>{
            event.preventDefault();

        }



        if (loading) {
            return <progress className="progress w-full"></progress>;
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
                    handleUpdateUser={handleUpdateUser}
                    ></MyReviewDetails>
                    )}
                </>
            }


        </div>
    );
};

export default MyReview;