// src/components/UploadInfo.js
import React, { useState } from 'react';
import axios from 'axios';
import './UploadInfo.css'

const UploadInfo = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        height: '',
        skinColor: '',
        hairColor: '',
        eyeColor: '',
        birthMark: '',
        disability: '',
        contactInfo: '',
        reward: '',
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
        await axios.post('/upload', data);
        // Redirect or show success message
    };

    return (
        <div className="form-container">
            <h2>Upload Information</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" name="name" onChange={handleChange} required />

                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" onChange={handleChange} required />

                <label htmlFor="height">Height (in cm):</label>
                <input type="number" id="height" name="height" onChange={handleChange} required />

                <label htmlFor="skinColor">Skin Color:</label>
                <input type="text" id="skinColor" name="skinColor" onChange={handleChange} required />

                <label htmlFor="hairColor">Hair Color:</label>
                <input type="text" id="hairColor" name="hairColor" onChange={handleChange} required />

                <label htmlFor="eyeColor">Eye Color:</label>
                <input type="text" id="eyeColor" name="eyeColor" onChange={handleChange} required />

                <label htmlFor="birthMark">Birth Mark:</label>
                <textarea id="birthMark" name="birthMark" onChange={handleChange} required></textarea>

                <label htmlFor="disability">Disability (if any):</label>
                <textarea id="disability" name="disability" onChange={handleChange}></textarea>

                <label htmlFor="contactInfo">Contact Information:</label>
                <input type="text" id="contactInfo" name="contactInfo" onChange={handleChange} required />

                <label htmlFor="reward">Reward (if applicable):</label>
                <input type="text" id="reward" name="reward" onChange={handleChange} />

                <label htmlFor="image">Upload Image:</label>
                <input type="file" id="image" name="image" accept="image/*" onChange={handleFileChange} required />

                <button type="submit">Submit Information</button>
            </form>
        </div>
    );
};

export default UploadInfo;