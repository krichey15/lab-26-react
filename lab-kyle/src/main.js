'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import {say} from 'Cowsay';


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
      text: 'woof'
    }
  }
  render(){
    return (
      <div>
      <Header />
      </div>
    )
  }
}
ReactDOM.render(<App/>, main);
