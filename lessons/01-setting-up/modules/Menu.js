//import React from 'react'
import React, {Component } from 'react';
// import {State, Link} from 'react-router'
import {Link, IndexLink} from 'react-router';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/about" activeClassName="active"><div>About</div></Link></li>
          <li><Link to="/repos" activeClassName="active">Repos</Link></li>
        </ul>
      </div>
    )
  }
}
