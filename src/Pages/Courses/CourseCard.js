import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const CourseCard = ({course}) => {

    useTitle('Services')

    const {name, _id, description, price, img } = course
    

    return (
        <div className=''>
            <div className="hero  bg-base-200 rounded-lg mx-auto">
                <div className="mx-auto p-5">

                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img src={img} alt="" className="rounded-lg shadow-2xl h-[270px]"/>
                            </PhotoView>
                        </PhotoProvider>

                    <div>
                        <h1 className="text-3xl mt-5 font-bold">{name}</h1>
                        {description.length > 100 ?(
                            <p className="py-6 h-[70px]">{description.slice(0, 100)}...{" "}</p>
                            )
                        :
                            <p className="py-6 h-[150px]">{description}</p>
                        }

                        <p className="py-6">Price: ${price} /week</p>
                        <Link to={`/services/${_id}`}> <button className="btn btn-primary">See Details</button> </Link>                    
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default CourseCard;