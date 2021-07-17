import React from 'react';
import './Styles.css'

class Card extends React.Component {
    render() {
        return (
            <div className='card card1'>
                <p className='about'>{this.props.obj}</p>
                <img src={this.props.image}/>
                <p class='seemore'>See more</p>
            </div>
        );
    }
}

export default Card;