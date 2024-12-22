// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import FindPerson from './FindPerson';
import UploadInfo from './UploadInfo';
import Login from './Login';
import Signup from './Signup';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/find" element={<FindPerson />} />
                <Route path="/upload" element={<UploadInfo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
};

export default App;
