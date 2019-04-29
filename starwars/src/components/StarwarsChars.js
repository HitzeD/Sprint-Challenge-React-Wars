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

{/*export default class StarwarsChars extends React.Component {
    constructor(){
        super();
        this.state = {
            homeWorld = []
        };
    }

    componentDidMount() {
        this.getHomeWorld()
    }
}*/}

export default StarwarsChars;

{/*componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };*/}