import React, {Component } from 'react';

export default class About extends Component {

  render() {
    return (<div><h1>About</h1></div>)
  }

  componentDidMount() {
    console.log("entered About");
  }

  componentWillUnmount() {
    console.log("eiting about");
  }

}
