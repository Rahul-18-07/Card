import React from 'react';
import { BrowserRouter, Navigate, useNavigate, Route, Routes } from "react-router-dom";

interface RecipeCardProps {
  id: Number;
  title: string;
  calories: number;
  proteins: string;
  fats: string;
  image: string;
  onAdd: (title: string) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  id,
  calories,
  proteins,
  fats,
  image,
  onAdd
}) => {
  // const navigate = useNavigate();
  return (
    <div className="recipe-card" >
      <h2 className="title">{title}</h2>
      <img src={image} alt={title} />
      <p>Calories: {calories}</p>
      <p>Proteins: {proteins}</p>
      <p>Fats: {fats}</p>
      <div className="buttons">
        <button onClick={() => onAdd(title)}>Add</button>
      </div>
    </div>
  );
}

export default RecipeCard;
