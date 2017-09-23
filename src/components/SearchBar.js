import React, { Component } from 'react';



class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }


    render(){
        return(
            <div className="SearchBar">
                <input placeholder="Enter A Song Title" />
                <a onClick={this.handleSearch}>SEARCH</a>
          </div>
        )
    }

    _handleSearch = (e) => {
        e.preventDefault();
        
    }
}

export default SearchBar