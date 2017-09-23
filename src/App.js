import React, { Component } from 'react';
import './reset.css';
import './App.css';
import './Basic.css';

import SearchBar from './components/SearchBar.js';
import SearchResults from './components/SearchResults.js';
import Playlist from './components/Playlist.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <SearchBar />
            {/* search box */}
            {/* search button */}

        <div className="App-playlist">
            <SearchResults />
        {/* results */}
            {/* add to personal list */}
            <Playlist />
        {/* personal playlist */}
            {/* rename list */}
            {/* minus from list */}
            {/* final save playlist to spotify */}
        </div>

      </div>
    );
  }
}

export default App;
