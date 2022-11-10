import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const EditReview = () => {

    const {user} = useContext(AuthContext)
    console.log(user)

    const review = useLoaderData();
    // console.log(review)

    return (
        <div>
            

            <div>
                            <h2 className="text-4xl text-center font-bold my-10 text-blue-700">Edit Review</h2>
                            <form className='mb-20'>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                                <input name="name" defaultValue={''} readOnly type="text" placeholder="Your Full Name" className="input input-bordered w-full"/>
                                <input name="email" defaultValue={' '} readOnly type="email" placeholder="Email" className="input input-bordered w-full" required/>
                                <input name="rating" type="text" placeholder="Rating" className="input input-bordered w-full" required/>         
                                <input name="id" type="text" defaultValue={''} readOnly placeholder="Id" className="input hidden input-bordered w-full" required/>         
                                </div>
                                <textarea name="comment" type="text" placeholder="Comment" className="input input-bordered w-full mt-5 h-28" required/>
                                
                                <input className="btn btn-outline btn-primary my-5 rounded-lg px-10 text-center" type="submit" value="Submit"/>
                            </form>
                        </div>


        </div>
    );
};

export default EditReview;