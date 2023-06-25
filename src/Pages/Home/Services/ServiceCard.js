import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, title, name, description, price, _id } = service;



    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Computer" className='w-full h-80' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-2xl font-semibold text-red-500'>Price: $ {price}</p>
                <p className='text-xl font-semibold'>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-active btn-accent">Check Out</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;