import React, { Component } from 'react';
import '../Basic.css';
import TrackList from './TrackList.js';

class Playlist extends Component {
    constructor(props){
        super(props);
        this.state = {
            playList: [],
        }
    }

    addTrackToPlaylist = () => {
        this.setState({
            playList: this.props.playlistTracks.map((playlistTracks) => {
                let name = playlistTracks['name'];
                let id = playlistTracks['id'];
                let artist = playlistTracks['artist'];
                let album = playlistTracks['album'];
                let uri = playlistTracks['uri']
                return <TrackList 
                    key={id}
                    name={name}
                    artist={artist}
                    album={album}
                    uri={uri}
                />
            })
        })
    }
    
    render(){
    
        return(
        <div className="Playlist">
            <input defaultValue={'New List'}/>
                {this.state.playList}
            <a className="Playlist-save">SAVE TO SPOTIFY</a>
        </div>
        )
    }
};


export default Playlist