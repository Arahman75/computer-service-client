import React, { useContext } from 'react';
import logo from '../../assets/images/login/login.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext);
    // start rules of the redirect/location
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    // stop rules of the redirect/location

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);

                // get jwt token
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser)

                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // local storage is the easiest but not the best way to storage jwt
                        localStorage.setItem('genius-token', data.token);
                    })

                // start rules of the redirect/location

                navigate(from, { replace: true });

                // stop rules of the redirect/location

            })
            .catch(err => console.error(err));
    }

    return (
        <div className="hero w-full my-20 ">
            <div className="hero-content grid md:grid-cols-2 gap-10 flex-col lg:flex-row">
                <div>
                    <img className='w-3/4' src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl text-center font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" name="" value="Login" />

                        </div>
                    </form>
                    <p className=' font-bold text-center pb-5'>New Genius Car? <Link to='/signUp' className='text-red-500'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;