// src/components/Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Signup.css'

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/signup', { name, email, password });
        // Redirect or show success message
    };

    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button type="submit">Sign Up</button>
            </form>
            <div className="switch">
                Already have an account? 
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Signup;