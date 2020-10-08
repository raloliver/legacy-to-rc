import React, { Component } from 'react';
import Feed from './components/Feed';
import Hero from './components/Hero';
import Navigation from './components/Navigation';

import data from './data/data.json';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "This is my name",
      title: "List of items",
      feeds: data
    }
  }
  render() {
    return (
      <div className="container">
        <Navigation />
        <Hero title={this.state.title} />
        <Feed feeds={this.state.feeds} />
        <div className="footer">
          <p>&copy; {this.state.name}.</p>
        </div>
      </div>
    );
  }
}

export default App;
