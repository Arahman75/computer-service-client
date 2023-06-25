import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            //fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl text-red-500 font-bold'>Service</p>
                <h1 className='text-5xl py-3 font-semibold'>Our Service Area</h1>
                <p className='w-1/2 text-center mx-auto'>The Daily Prothom Alo is a daily newspaper in Bangladesh, published from Dhaka in the Bengali language. It is the largest circulated newspaper in Bangladesh.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;