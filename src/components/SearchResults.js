import React, { Component } from 'react';
import '../Basic.css';
import TrackList from './TrackList.js';


class SearchResults extends Component {

    render(){
        return(
          <div className="SearchResults">
            <h2>Results</h2>
            <TrackList searchResults={this.props.searchResults}/>
          </div>
        )
    }
}

export default SearchResults