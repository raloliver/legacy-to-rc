import React from 'react';
import Feed from './components/Feed';
import Hero from './components/Hero';
import Navigation from './components/Navigation';

function App() {
  return (
    <div class="container">
      <Navigation />
      <Hero />
      <Feed />
      <div class="footer">
            <p>&copy; A1A Beachfront Ave.</p>
      </div>
    </div>
  );
}

export default App;
