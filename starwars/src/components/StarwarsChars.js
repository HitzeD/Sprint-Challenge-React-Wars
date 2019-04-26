import React from 'react';
import './StarWars.css';
import Characters from './Characters.js';
// this component recieves an array of characters, 
// and maps each charater into the Charater component
const StarwarsChars = props => {
    return(
        <div className="charswrap">
            {props.people.map(person => (
                <Characters person={person} key={person.created} />
            ))}
        </div>
    )
}

export default StarwarsChars;