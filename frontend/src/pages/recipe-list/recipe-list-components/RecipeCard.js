import React, { useState } from 'react';


import clock from '../../images/clock.png'
import ExpandedCard from './ExpandedCard';

export default function RecipeCard(props) {

  const [isExpanded, setIsExpanded] = useState(false);

  const clickViewRecipe = () => {
    setIsExpanded(true);
  }

  const closeViewRecipe = () => {
    setIsExpanded(false);
  }

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
        <button onClick={clickViewRecipe}>View Recipe</button>
      </div>
      {isExpanded && ( 
        <div className='popup-view'>
          <div className='popup'>
            <button className='close-button' onClick={closeViewRecipe}></button>
            <ExpandedCard {...props} />
          </div>
        </div>
      )}
    </div>
  );
};
