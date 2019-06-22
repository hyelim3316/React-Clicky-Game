import React, { Component } from 'react';
import './App.css';
import char from './char.json';
import Card from './components/Card';
import Nav from './components/Nav/index.js';


class App extends Component{

  state = {
    message: "Click an image to begin!",
    char: char,
    unclickedChar: char,
    score:0,
    topScore:0
  };

  clickChar = id => {
    this.setState({score: this.state.score + 1});
    this.shuffle({char});

  }

 shuffle = arr =>  {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

  render() {

  return (
    <div className="App">
      <Nav 
        score={this.state.score}
        topScore={this.state.topScore}
        message={this.state.message}
      />
    {/* header */}
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
         <h1 className="display-4">Pokemon Clicky Game!</h1>
          <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
      </div>
    </div>
    {/* main part */}
    <div className="row">
    {this.shuffle(this.state.char).map(char => (

      <Card
        id={char.id}
        key={char.id}
        image={char.image}
        clickChar={this.clickChar}

      />
    ))}
    </div>
    </div>
  );
  }
}
export default App;
