import React, { Component } from 'react';
import '../Basic.css';



class Track extends Component {
    constructor(props){
        super(props);
        this.state = {
            isRemoval: true,
            album: '',
            artist: '',
            name: ''
        }   
    }

    render(){
        return(
        <div className="Track">
            <div className="Track-information">
              <h3>{this.props.album}</h3>
              <p>{this.props.state.artist} | {this.props.state.name}</p>
            </div>
            <a className="Track-action">{this._renderAction}</a> */}
        </div>
        )
    }

    _renderAction = () => {
        if(this.state.isRemoval){
            return "-"
        }
        return "+"
    }
}

export default Track