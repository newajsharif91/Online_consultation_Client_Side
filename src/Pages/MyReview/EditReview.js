import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const EditReview = () => {

    const {user} = useContext(AuthContext)
    // console.log(user)

    const reviews = useLoaderData()
    console.log(reviews._id)

    const [review, setReview] = useState();
    console.log(review)



    const handleUpdateUser = event =>{
        event.preventDefault()

        fetch(`https://meet-your-trainer-server-atik2788.vercel.app/reviews${user._id}`)

    }

        const handleInputChange = event =>{
            const field = event.target.name;
            const value = event.target.value;
            const newReview = {...review}
            newReview[field] = value;
            setReview(newReview)
        }

    
    return (
        <div>
            

            <div>
                            <h2 className="text-4xl text-center font-bold my-10 text-blue-700">Edit Review</h2>
                            <form  className='mb-20'>
                                <div onSubmit={handleUpdateUser} className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                                <input name="name" defaultValue={user.displayName} readOnly type="text" placeholder="Your Full Name" className="input input-bordered w-full"/>
                                <input name="email" defaultValue={user.email} readOnly type="email" placeholder="Email" className="input input-bordered w-full" required/>
                                <input name="rating" onBlur={handleInputChange} type="text" placeholder="Rating" className="input input-bordered w-full" required/>         
                                <input name="id" type="text" defaultValue={''} readOnly placeholder="Id" className="input hidden input-bordered w-full" required/>         
                                </div>
                                <textarea onBlur={handleInputChange} name="comment"  type="text" placeholder="Comment" className="input input-bordered w-full mt-5 h-28" required/>
                                
                                <input className="btn btn-outline btn-primary my-5 rounded-lg px-10 text-center" type="submit" value="Submit"/>
                            </form>
                        </div>


        </div>
    );
};

export default EditReview;