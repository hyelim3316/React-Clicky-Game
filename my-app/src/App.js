import React, { Component } from 'react';
import './App.css';
import char from './char.json';
import Card from './components/Card';
import Nav from './components/Nav/index.js';
import Header from './components/Header';


class App extends Component{

  state = {
    message: "Click an image to begin!",
    char,
    unclickedChar: char,
    score:0,
    topScore:0
  };

  clickChar = id => {
    //correct, score+, game keep going
    if (this.state.unclickedChar.find(char=> char.id === id)) {
      this.setState({
        score: this.state.score + 1,
        unclickedChar : this.state.unclickedChar.filter(char=> char.id !== id),
        message: "Your guess is correct!", 
        // topScore: this.state.score + 1
      });
     //incorrect, reset game
    } else {
      this.setState({
        message: "Your guess is incorrect!",
        unclickedChar: this.state.char,
        score: 0,
        topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore
      })
    }
    

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
      <Header />
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
