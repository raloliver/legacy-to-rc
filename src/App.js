import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Feed from './components/Feed';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';

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
      <Router>
        <div className="container">
          <Navigation />
          <Hero title={this.state.title} />
          <Switch>
            <Route exact path="/" render={(props) => (
              <Feed feeds={this.state.feeds} />
            )} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <div className="footer">
            <p>&copy; {this.state.name}.</p>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
