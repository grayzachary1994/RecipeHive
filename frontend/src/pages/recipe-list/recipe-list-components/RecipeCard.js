import React from "react";

import clock from '../../images/clock.png'

export default function RecipeCard(props) {

  return (
    <div className="recipe-card">
      <img src={props.image} alt={props.name} />
      <div className="recipe-title">
        <h2>{props.title}</h2>
      </div>
      <div className="recipe-details">
        <p>{props.description}</p>
        <div className="recipe-time">
          <img src={clock} className="clockIcon" alt="clock" />
          <p>{props.time}</p>
        </div>
      </div>
      <div className="view-button">
        <button>View Recipe</button>
      </div>
    </div>
  );
};
