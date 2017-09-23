import React, { Component } from 'react';
import '../Basic.css';
import Spotify from './Spotify.js';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }


    render(){
        return(
            <div className="SearchBar">
                <input placeholder="Enter A Song Title" onChange={this._handleSearch}/>
                <a onClick={this.handleSearch}>SEARCH</a>
          </div>
        )
    }

    _handleTermChange = (e) => {
        this.setState({
            term: e.target.value
        });
    }
    _handleSearch = (e) => {
        this.props.spotifySearch(this.state.term)
        e.preventDefault();
    }
}

export default SearchBar