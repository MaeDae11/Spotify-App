import React, { Component } from 'react';
import '../Basic.css';




class Track extends Component {
    constructor(props){
        super(props);
        this.state = {
            isRemoval: true
        }   
    }

    render(){
        const {
            key,
            name,
            artist,
            album,
            uri
        } = this.props

        return(
        <div className="Track" key={key}>
            <div className="Track-information">
                <h3>{album}</h3>
                <p>{artist} | {name}</p>
            </div>
            <a className="Track-action" onClick={this.props._renderAction}>{this._renderAction}</a>
        </div>
        )
    }

    _addToPlaylist = (e, track) => {
        this.props.addTrack(track)
        e.preventDefault();
    }
    _renderAction = (e) => {
        e.preventDefault();
        if(this.state.isRemoval === true){
           return <a>-</a>
        } 
        return <a>+</a>
    }
    
}

export default Track