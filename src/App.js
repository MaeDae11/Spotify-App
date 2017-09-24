import React, { Component } from 'react';
import './reset.css';
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
            playlistName: '',
            playlistTracks: [],
            message: ''
        }
    }

    spotifySearch = (term) => {
        Spotify.search(term)
        .then(searchResults => {
            this.setState({
                searchResults: searchResults
            })
        });
    };

    addTrack = (track) => {
        if(this.state.playlistTracks.includes(track)){
            console.log("nope")
            this.setState({
                message: "This track is already in your list"
            })
        } else {
            let tracks = this.state.playlistTracks
            tracks.push(track)
            this.setState({
                playlistTracks: tracks
            })
        }
    };

    removeTrack = (track) => {
        let tracks = this.state.playlistTracks;
        tracks = this.filter(currentTrack => currentTrack.id !== track.id);
        this.setState({
            playlistTracks: tracks
        });
    };

    upsdatePlaylistName = (name) => {
        this.setState({
            playlistName: name
        });
    };

  render() {
    return (
      <div className="App">
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <SearchBar spotifySearch={this.spotifySearch}/>


        <div className="App-playlist">
            <SearchResults 
                searchResults={this.state.searchResults} 
                onAdd={this.addTrack}
            />

            <Playlist 
                playlistName={this.state.playlistName} 
                playlistTracks={this.state.playlistTracks}
                onRemove={this.removeTrack}
                onNameChange={this.upsdatePlaylistName}
            />

        </div>

      </div>
    );
  }
}

export default App;
