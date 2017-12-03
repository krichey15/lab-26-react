'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import {say} from 'Cowsay';
import faker from 'faker';


const main = document.getElementById('main');

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
      content: 'woof'
    }

    this.generateMoo = this.generateMoo.bind(this);
  }

  generateMoo() {
    this.setState({content: faker.hacker.phrase()});
  }
  render(){
    return (
      <div>
        <Header />
        <pre>{say({text: this.state.content})}</pre>
        <button onClick={this.generateMoo}>Click</button>
      </div>
    )
  }
}
ReactDOM.render(<App/>, main);
