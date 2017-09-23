import React, { Component } from 'react';
import '../Basic.css';



class Track extends Component {
    constructor(props){
        super(props);
        this.state = {
            isRemoval: true,
            symbol: '+'
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
            <a className="Track-action" onClick={this._renderAction}>{this.state.symbol}</a>
        </div>
        )
    }

    _renderAction = (e) => {
        e.preventDefault();
        if(this.state.symbol === '-'){
            this.state.isRemoval = false
            return this.state.symbol = '+'
        } else {
            return this.state.symbol = '-'
        }
    }
}

export default Track