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
            <a className="Track-action">+</a>
        </div>
        )
    }

    _renderAction = () => {
        if(!this.state.isRemoval){
            return "-"
        }
        return "+"
    }
}

export default Track