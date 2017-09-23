import React, { Component } from 'react';
import './App.css';
import './Basic.css';

import SearchBar from './components/SearchBar.js';

class App extends Component {
    
  render() {
    return (
      <div className="App">
        <div className="header">
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
        </div>
        <SearchBar />
        {/* search box */}
        {/* search button */}
        {/* results */}
            {/* add to personal list */}
        {/* personal playlist */}
            {/* rename list */}
            {/* minus from list */}
            {/* final save playlist to spotify */}

      </div>
    );
  }
}

export default App;
