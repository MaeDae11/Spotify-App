import React, { Component } from 'react';
import '../Basic.css';



class Track extends Component {

    render(){
        return(
        <div className="Track">
            <div className="Track-information">
              <h3>Tiny Dancer</h3>
              <p>Elton John | Madman Across The Water</p>
            </div>
            <a className="Track-action">+</a>
        </div>
        )
    }
}

export default Track