import React, { Component } from 'react';
import '../Basic.css';
// import TrackList from './TrackList.js';

class Playlist extends Component {


    render(){
        return(
        <div className="Playlist">
            <input defaultValue={'New Playlist'} />
            {/* <TrackList /> */}
            <a className="Playlist-save">SAVE TO SPOTIFY</a>
        </div>
        )
    }
};


export default Playlist