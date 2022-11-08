import React from 'react';

const CourseCard = ({course}) => {

    const {name, _id, description, price, img } = course

    return (
        <div className=''>
            <div className="hero min-h-screen bg-base-200 rounded-lg mx-auto">
            <div className="w-11/12 mx-auto">
                <img src={img} alt="" className=" rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl mt-5 font-bold">{name}</h1>
                    <p className="py-6">{description}</p>
                    <p className="py-6">{price}</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CourseCard;