import React, { Component } from 'react';
import TwitterFeed from './components/twitter-feed'

export default class App extends Component {

  render() {
    return (
      <div>
        <TwitterFeed />
      </div>
    );
  }
}