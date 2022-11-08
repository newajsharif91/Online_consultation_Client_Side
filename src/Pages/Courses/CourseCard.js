import React from 'react';

const CourseCard = ({course}) => {

    const {name, _id, description, price, img } = course

    return (
        <div className=''>
            <div className="hero  bg-base-200 rounded-lg mx-auto">
            <div className="mx-auto p-5">
                <img src={img} alt="" className=" rounded-lg shadow-2xl h-[270px]" />
                <div>
                    <h1 className="text-3xl mt-5 font-bold">{name}</h1>
                    <p className="py-6 h-[150px]">{description}</p>
                    <p className="py-6">${price} /week</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CourseCard;