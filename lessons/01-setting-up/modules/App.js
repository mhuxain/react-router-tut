//import React from 'react'
import React, {Component } from 'react';
// import {State, Link} from 'react-router'
import {Link} from 'react-router';
import Menu from './Menu';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React Router Tutorial - {React.version}</h1>
        <Menu />

        {this.props.children}
      </div>
    )
  }
}
