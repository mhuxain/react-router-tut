import React, {Component } from 'react';

export default class Repos extends Component {
  render() {
    return (
      <div>
        Repos
        <h2>{this.props.params.repoName}</h2>
      </div>);
  }


}
