import React, { Component } from 'react';
import '../Basic.css';
import TrackList from './TrackList.js';


class SearchResults extends Component {

    render(){
        let trackInfo = this.props.searchResults.map((searchResults) => {
            let name = searchResults['name'];
            let id = searchResults['id'];
            let artist = searchResults['artist'];
            let album = searchResults['album'];
            let uri = searchResults['uri']
            return <TrackList 
                key={id}
                name={name}
                artist={artist}
                album={album}
                uri={uri}
            />
        })
        console.log(trackInfo)
        return(
          <div className="SearchResults">
            <h2>Results</h2>
                {trackInfo}
          </div>
        )
    }
}

export default SearchResults