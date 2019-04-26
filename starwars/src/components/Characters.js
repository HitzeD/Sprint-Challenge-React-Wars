import React from 'react';
// blank form that cycles through each charater and 
// populates each area as called
function Characters(props) {
  return (
    <div className="chars">
        <h3 className="chars-name"><strong>{props.person.name}</strong></h3>
        <p>
            Height: {props.person.height} cm
        </p>
        <p>
            Mass: {props.person.mass} kg
        </p>
        <p>
            Hair Color: {props.person.hair_color} 
        </p>
        <p>
            Skin Color: {props.person.skin_color}
        </p>
        <p>
            Eye Color: {props.person.eye_color}
        </p>
        <p>
            Birth Year: {props.person.birth_year}
        </p>
        <p>
            Gender: {props.person.gender}
        </p>
        <p>
            Home World: {props.person.homeworld}
        </p>
        
    </div>
);
}

export default Characters;

{/*<p>
            StarShips: [{props.person.starships}]
        </p> */}