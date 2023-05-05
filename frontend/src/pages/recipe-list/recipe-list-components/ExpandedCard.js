import React from "react";

import clock from "../../images/clock.png";

export default function ExpandedCard(props) {

  const listedIngredients = (ingredient, number) => (
    <li key={number}>{ingredient}</li>
  );

  const listedDirections = (direction, number) => (
    <li key={number}>{direction}</li>
  );

  return (
    <div className="expanded-card">
      <img className="expanded-image" src={props.image} alt={props.name} />
      <div className="expanded-title">
        <h2>{props.title}</h2>
      </div>
      <div className="expanded-details">
        <p>{props.description}</p>
      </div>
      <div className="expanded-ingredients">
        <h3>Ingredients:</h3>
        <ul>
          {props.ingredients.map(listedIngredients)}
        </ul>
      </div>
      <div className="expanded-directions">
        <h3>Directions:</h3>
        <ol>
          {props.directions.map(listedDirections)}
        </ol>
      </div>
      <div className="expanded-time">
        <p>{props.time}</p>
      </div>
    </div>
  );
}
