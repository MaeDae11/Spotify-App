import React, { Component } from 'react';
import '../Basic.css';
import TrackList from './TrackList.js';



class Playlist extends Component {
    constructor(props){
        super(props);
        this.state = {
            isRemoval: true
        }   
    }

    render(){
    
        return(
        <div className="Playlist">
            <input defaultValue={'New List'} onChange={this._handleNameChange}/>
                <TrackList 
                    tracks={this.props.playlistTracks} 
                    isRemoval={this.state.isRemoval}
                    onRemove={this.props.removeTrack}
                />
            <a className="Playlist-save">SAVE TO SPOTIFY</a>
        </div>
        )
    }

    _handleNameChange = (e) => {
        this.defaultValue = e.target.value
    }
};


export default Playlist