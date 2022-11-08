import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseCardLimite = () => {
    const [courses, setCourses] = useState([])
    console.log(courses)

    useEffect(()=>{
        fetch('https://meet-your-trainer-server-atik2788.vercel.app/serviceslimit')
        .then(res=>res.json())
        .then(data => setCourses(data))
    }, [])

    return (
<div className='lg:grid lg:grid-cols-3 mx-auto gap-5 mt-10 mb-20'>
            {   courses.map(course => <div
                key={course._id}
                course={course}
                >
                    <div className="hero  bg-base-200 rounded-lg mx-auto">
                        <div className="mx-auto p-5">
                            <img src={course.img} alt="" className=" rounded-lg shadow-2xl h-[270px]" />
                            <div>
                                <h1 className="text-3xl mt-5 font-bold">{course.name}</h1>
                                <p className="py-6 h-[150px]">{course.description}</p>
                                <p className="py-6">${course.price} /week</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>

                </div>)
            }
            <Link to='/courses'><button class="btn btn-outline px-20 btn-primary">See ALL</button></Link>
        </div>




    );
};

export default CourseCardLimite;