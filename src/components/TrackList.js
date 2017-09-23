import React, { Component } from 'react';
import '../Basic.css';
import Track from './Track.js';

class TrackList extends Component {
    

    render(){
        return(
            // will map through trackList and render like this.
            <div className="TrackList">
                <Track />
            </div>
        )
    }

    _sortThroughSearchResults = (props) => {
        let tracks = props.map((prop) => {
            
        })
    }
}

export default TrackList