import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero mt-10 mb-24">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative '>
                    <img src={person} alt="" className='w-4/5 h-full  rounded-lg shadow-2xl' />
                    <img src={parts} alt="" className='absolute right-5 top-1/2 border-8 border-white w-3/5 rounded-lg shadow-2xl' />
                </div>
                <div className='w-1/2 '>
                    <p className='text-xl text-red-500 font-bold'>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified <br /> $ of experience <br /> in this field!</h1>
                    <p className="py-3">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.  In deleniti eaque aut repudiandae et a id nisi.</p>
                    <p className="pb-3">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-active btn-accent">Get More Info</button>
                </div>
            </div>
        </div>

    );
};

export default About;