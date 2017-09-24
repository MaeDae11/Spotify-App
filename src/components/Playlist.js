import React, { Component } from 'react';
import '../Basic.css';
import TrackList from './TrackList.js';

class Playlist extends Component {
    constructor(props){
        super(props);
    }

    
    render(){
    
        return(
        <div className="Playlist">
            <input defaultValue={'New List'}/>
                <TrackList trackInfo={this.props.playlistTracks} />
            <a className="Playlist-save">SAVE TO SPOTIFY</a>
        </div>
        )
    }
};


export default Playlist