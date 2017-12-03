'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import {say, DEFAULT, WWW, MUTILATED, DRAGON_AND_COW, HEAD_IN, SATANIC, SMALL, SURGERY, VADER} from 'Cowsay';
import faker from 'faker';


const main = document.getElementById('main');
let cows = [DEFAULT, WWW, MUTILATED, DRAGON_AND_COW, HEAD_IN, SATANIC, SMALL, SURGERY, VADER];

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Generate Cowsay Lorem</h1>
      </header>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: say({
        text: 'woof',
        cow: DEFAULT})
    }

    this.generateMoo = this.generateMoo.bind(this);
  }

  generateMoo() {
    this.setState({
      content: say({
        text:faker.hacker.phrase(),
        cow: cows[Math.floor(Math.random() * cows.length)]
      })
    });
  }

  render(){
    return (
      <div>
        <Header />
        <pre>{this.state.content}</pre>
        <button onClick={this.generateMoo}>Click</button>
      </div>
    )
  }
}
ReactDOM.render(<App/>, main);
