import React from 'react';

class Card2 extends React.Component{
    render(){
        return(
            <div className='card card3'>
                <img src={this.props.img}/>
                <span className='sup'>₹<span className='rate'>{this.props.rate+' - '}<span className='sup'>₹<span className='rate'>{this.props.rate+this.props.rate/5}</span></span></span></span>
            </div>
        );
    }
}

export default Card2;