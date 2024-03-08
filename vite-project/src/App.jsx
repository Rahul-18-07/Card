import React from 'react';
import HomePage from '../pages/HomePage';
import './App.css';
import RecipeLayout from './components/RecipeLayout';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/category' element={<HomePage />} />
        <Route path='/category/:searchText' element={<RecipeLayout />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
