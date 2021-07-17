import React from 'react';

class Card1 extends React.Component{
    render(){
        return(
            <div className='card card2'>
                <img src={this.props.img}/>
                <p>{this.props.link}</p>
                <h5><span className='sub'>₹</span>{this.props.mon1}<span className='sub'>{this.props.mon2}</span> </h5>
               
            </div>
        );
    }
}

export default Card1;