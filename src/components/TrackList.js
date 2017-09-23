import React, { Component } from 'react';
import '../Basic.css';
import Track from './Track.js';

class TrackList extends Component {

    render(){
        const {
            id,
            name,
            artist,
            album,
            uri
        } = this.props

        return(
            <div className="TrackList">
                <Track key={id} album={album} artist={artist} name={name} uri={uri}/>
            </div>
        )
    };
};

export default TrackList