import React, { Component } from 'react';
import './reset.css';
import './App.css';
import './Basic.css';

import SearchBar from './components/SearchBar.js';
import SearchResults from './components/SearchResults.js';
import Playlist from './components/Playlist.js';
import Spotify from './components/Spotify.js';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchResults: [],
        }
    }

    spotifySearch = (term) => {
        Spotify.search(term)
        .then(searchResults => {
            this.setState({
                searchResults: searchResults
            })
        })
    }

  render() {
    return (
      <div className="App">
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <SearchBar spotifySearch={this.spotifySearch}/>
            {/* search box */}
            {/* search button */}

        <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
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
