import React from 'react';
import './HomePage.css'; // Import your CSS file for styling
import { BrowserRouter, Navigate, useNavigate, Route, Routes } from "react-router-dom";
const categories = [
    { id: 1, name: 'Japanese' },
    { id: 2, name: 'Indian' },
    { id: 3, name: 'Italian' },
    // Add more categories as needed
];

const HomePage: React.FC = () => {
    // const navigate = useNavigate();
    return (
        <div className="home-page">
            <h1>Recipe Categories</h1>
            <div className="category-list">
                {categories.map((category) => (
                    <div key={category.id} className="category-block"  >
                        <h2>{category.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
