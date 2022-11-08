import React from 'react';
import { Link } from 'react-router-dom';
import About from '../../Pages/About/About';

const Home = () => {
    return (
        <div>
            <h1 className='text-center text-7xl font-bold text-purple-700 mt-10'>Meet Your Trainer</h1>
            <div className='lg:grid md:grid grid-cols-2 mt-16 w-11/12 mx-auto '>
                <div className='lg:w-11/12 md:w-2/4 md:text-left text-center lg:text-left mx-auto lg:pt-16 md:pt-16 '>
                    <h1 className='text-5xl font-semibold'>Keep Your Body Fit, With
                    <p className='text-blue-700 font-bold my-2'>John Cena</p> from anywhere.
                    </h1>
                    <p className='mt-4 text-2xl'>For over 15 years, I train lots of people in fitness industry. If you want to become one of the best body builder, learn self defiance  and many more, it’s as simple as learn online with me.
                    </p>
                    <Link to='/courses'><button className="mt-4 btn btn-outline btn-primary"><h2>Start Now!</h2></button></Link>
                </div>

                <div className='mx-auto  lg:mt-0 md:mt-0 mt-5'>
                    <img src={'https://i.ibb.co/Lv5YVQc/john-cena-workout-and-diet-plan-1200x800-removebg-preview.png'} alt="" />
                </div>
            </div>
            <About></About>


        </div>
    );
};

export default Home;