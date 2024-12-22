// src/components/FindPerson.js
import React, { useState } from 'react';
import axios from 'axios';

const FindPerson = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        skinColor: '',
        height: '',
        weight: '',
        eyeColor: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });
        await axios.post('/find', data);
        // Redirect or show success message
    };

    return (
        <div className="form-container">
            <h2>Find a Missing Person</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={handleChange} required />

                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" onChange={handleChange} required />

                <label htmlFor="skinColor">Skin Color:</label>
                <input type="text" id="skinColor" name="skinColor" onChange={handleChange} required />

                <label htmlFor="height">Height (cm):</label>
                <input type="number" id="height" name="height" onChange={handleChange} required />

                <label htmlFor="weight">Weight (kg):</label>
                <input type="number" id="weight" name="weight" onChange={handleChange} required />

                <label htmlFor="eyeColor">Eye Color:</label>
                <input type="text" id="eyeColor" name="eyeColor" onChange={handleChange} required />

                <label htmlFor="image">Upload Recent Photo:</label>
                <input type="file" id="image" name="image" accept="image/*" onChange={handleFileChange} required />

                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default FindPerson;