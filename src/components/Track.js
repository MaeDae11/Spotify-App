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

        return(
        <div className="Track" key={this.props.key}>
            <div className="Track-information">
                <h3>{this.props.track.name}</h3>
                <p>{this.props.track.artist} | {this.props.track.name}</p>
            </div>
            {this._renderAction()}
        </div>
        )
    }

    _renderAction = () => {
        if(this.props.isRemoval){
            return <a className="Track-Action" onClick={this._removeTrack}>-</a>
        }
        return <a className="Track-Action" onClick={this._addTrack}>+</a>
    }
    _addTrack = (e) => {
        e.preventDefault();
        this.props.addTrack(this.props.track)
    }
    _removeTrack = (e) => {
        e.preventDefault();
        this.props.onRemove(this.props.track)
    }
    
}

export default Track