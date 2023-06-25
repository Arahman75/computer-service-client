import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const CheckOut = () => {

    const { _id, price, title } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;
        // console.log(name, email, phone, message)

        const order = {
            service: _id,
            serviceName: title, price,
            customer: name,
            email,
            phone,
            message
        };

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('order successfully');
                    form.reset();
                }
            })
            .catch(err => console.error(err))


    }
    return (
        <div className='py-10'>

            <form onSubmit={handlePlaceOrder}>
                <h1 className='text-4xl mb-5 font-semibold'>Service: {title}</h1>
                <h2 className='text-3xl'>Price : ${price}</h2>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-ghost input-bordered w-full" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-ghost input-bordered w-full" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-ghost input-bordered w-full" />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost input-bordered w-full" readOnly />
                </div>
                <textarea name='message' className="textarea mt-5 textarea-success w-full" placeholder="Message"></textarea>
                <input type="submit" name="" className='btn btn-success' value="Place Your Order" />
            </form>

        </div>
    );
};

export default CheckOut;