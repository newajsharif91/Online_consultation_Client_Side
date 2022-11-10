import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const About = () => {
    useTitle('About')

    return (
        <div>
            <div className=" my-20 mx-auto">
                <img src="https://i.ibb.co/t2BxpGR/John-Cena-Sitting-Down-Resting.webp" className='w-full' alt="" />
            <div className="">
                <div className='lg:mt-20 mt-10'>
                    <h1 className="text-5xl font-bold text-center">Hi, I am John Cena...</h1>
                    <p className=" mt-5 text-xl">Loving an abusive person can cause the symptoms of post-traumatic stress disorder, including hypersensitivity, avoidance of triggering experiences, anxiety, and depression. Without addressing the pain inflicted by these types, the damage can fester, causing a lifetime of pain.</p><br />
                    <p className=" text-xl">At Fitness Hacks, we set in motion the healing path by providing inspiring content highlighting mental and physical fitness hacks for holistic health. We bring in guest experts, including psychologists and other mental health professionals, to share their best professional advice as we guide our readers to recovery.</p>
                    <Link to='/courses'><button className="btn btn-primary mt-5">Get Started</button></Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;