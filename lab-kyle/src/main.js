'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import {say} from 'cowsay';

const main = document.getElementsByTagName('div');

class Heading extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <header>Generate Cowsay Lorem</header>
    )
  }
}
