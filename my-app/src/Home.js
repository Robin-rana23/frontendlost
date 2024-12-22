 // src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src="https://www.shutterstock.com/image-vector/lost-found-icon-black-sign-260nw-1650454621.jpg" alt="Website Logo" />
                    <Link to="/">Missing Persons Tracker</Link>
                </div>
                <div className="profile">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small_2x/profile-icon-login-head-icon-vector.jpg" alt="Profile Icon" />
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                    </ul>
                </div>
            </nav>

            <header>
                <h1>Find or Help a Missing Person</h1>
            </header>

            <section id="main-options">
                <div className="option">
                    <Link to="/find">
                        <img src="https://static.vecteezy.com/system/resources/previews/014/554/760/original/man-profile-negative-photo-anonymous-silhouette-human-head-businessman-worker-support-illustration-vector.jpg" alt="Find Person" />
                        <h2>Find a Person</h2>
                    </Link>
                </div>

                <div className="option">
                    <Link to="/upload">
                        <img src="https://static.vecteezy.com/system/resources/previews/014/554/760/original/man-profile-negative-photo-anonymous-silhouette-human-head-businessman-worker-support-illustration-vector.jpg" alt="Upload Info" />
                        <h2>Upload Info</h2>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;