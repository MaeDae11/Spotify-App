import React, { Component } from 'react';
import '../Basic.css';
import Track from './Track.js';

class TrackList extends Component {
    constructor(props){
        super(props);

    }
    

    render(){
        let tracks = this.props.tracks.map((track) => {
            return <Track 
                key={track.id}
                onAdd={this.props.onAdd}
                isRemoval={this.props.isRemoval}
                onRemove={this.props.onRemove}
                track={track}
            />
        })

        return(
            <div className="TrackList">
                {tracks}
            </div>
        )
    };
    
};

export default TrackList


// this.props.tracks.map((tracks) => {
//     let track = {trackInfo}
//     let name = trackInfo['name'];
//     let id = trackInfo['id'];
//     let artist = trackInfo['artist'];
//     let album = trackInfo['album'];
//     let uri = trackInfo['uri']
//     return <Track 

//         key={id}
//         name={name}
//         artist={artist}
//         album={album}
//         uri={uri}
//         addTrack={this.props.addTrack}
//         trackInfo={this.trackInfo}
//     />
// })