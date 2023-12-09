import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/', { name, email, password, role })
            .then(response => {
                console.log(response.data);
                navigate('/login');
            })
            .catch(error => console.error(error));
    }

    return (
        <div class="flex items-center justify-center h-screen w-screen bg-030408 font-league">
            <div className=' h-2/3 w-3/5 flex text-white'>
                <div className=' bg-1b92a8 h-full w-1/3 rounded-l-3xl'>
                    <div>
                        <h1 className='text-3xl mt-40 ml-16 font-bold	'>MindScape</h1>
                        <p className='mt-4 ml-4 text-base text-192231 leading-7 tracking-wide font-semibold	'>Welcome to MindScape - We love to make perfect solutions for your business.
                        </p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='bg-192231 h-full w-3/4 flex flex-col items-center justify-center rounded-r-3xl'>
                    <h1 className='text-4xl text-white absolute mb-350px font-bold'>Signup</h1>
                    <label className="w-2/4 block text-787C83">
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='w-full border border-787C83 bg-192231 rounded-md px-4 py-1.5 mt-2 mb-2'
                        />
                    </label>
                    <label className="block w-2/4 text-787C83">
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full border border-787C83 bg-192231 rounded-md px-4 py-1.5 mt-2 mb-2'

                        />
                    </label>
                    <label className="block w-2/4 text-787C83">
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full border border-787C83 bg-192231 rounded-md px-4 py-1.5 mt-2 mb-2'

                        />
                    </label>

                    <div className='mt-2 mb-4 mr-10 space-x-5'>
                        <h1 className='absolute text-1b92a8 font-bold text-lg '>Role : </h1>
                        <label className='text-787C83'>
                            <input
                                type="radio"
                                name="role"
                                value="user"
                                checked={role === 'user'}
                                onChange={() => setRole('user')}
                                className='ml-8 w-4 h-4 mr-1 mt-1'
                            />

                            User
                        </label>
                        <label className='text-787C83'>
                            <input
                                type="radio"
                                name="role"
                                value="admin"
                                checked={role === 'admin'}
                                onChange={() => setRole('admin')}
                                className=' w-4 h-4 mr-1 mt-1'


                            />
                            Admin
                        </label>
                        <label className='text-787C83'>
                            <input
                                type="radio"
                                name="role"
                                value="client"
                                checked={role === 'client'}
                                onChange={() => setRole('client')}
                                className=' w-4 h-4 mr-1 mt-1'


                            />
                            Client
                        </label>
                    </div>

                    <button type="submit" className='bg-1b92a8 absolute mt-360px  text-white hover:bg-white hover:text-1b92a8 px-12 py-1  rounded '>Signup</button>
                    <p className='absolute mt-370px text-white'>Already have an account? <Link to='/login' className='text-1b92a8 hover:text-787C83'>Login</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
