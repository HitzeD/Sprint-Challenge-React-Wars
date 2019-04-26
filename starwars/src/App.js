import React, { Component } from 'react';
import './App.css';
import StarwarsChars from './components/StarwarsChars.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
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
  };

  render() {
    console.log(this.state.starwarsChars.map(person => {
      return person.name
    }));
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {/*in here, we are mapping each character into the StarwarsChars component*/}
        <StarwarsChars people={this.state.starwarsChars.map(person => {
          return person
        })}/>
      </div>
    );
  }
}

export default App;
