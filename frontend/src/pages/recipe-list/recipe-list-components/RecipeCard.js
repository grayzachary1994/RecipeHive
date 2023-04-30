import React, { Component, useState } from "react";

export default function RecipeCard(props) {

  return (
    <div className="recipe-card">
      <img src={props.image} alt={props.name} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div>
        <button className="view-button">View Recipe</button>
      </div>
    </div>
  );
};
