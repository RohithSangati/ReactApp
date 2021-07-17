import { throwStatement } from '@babel/types';
import React from 'react';
import search from './Images/search.png'

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            border:null,
        }
        this.changeBorder1 = this.changeBorder1.bind(this);
    }
    changeBorder1() {
        if(this.state.border===null){
            this.setState(
                {border:'2.5px solid rgb(255, 102, 0)'}
            );
        }
        else{
            this.setState(
                {border:null}
            );
        }
        
    }
    render() {
        return (
            <div className='search'>
                <input style={this.state} type='text' className='searchbar' onFocus={this.changeBorder1} onBlur={this.changeBorder1}/>
                <div className='schicon'><i class='fa fa-search fa-10x searchicon'></i></div>
            </div>
        )
    }
}

export default Search;