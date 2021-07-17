import React from 'react';
import './Styles.css';
import Card from './Card.jsx';
import bed from './Images/bed.jpg';
import dining from './Images/dining.jpg';
import furniture from './Images/furniture.jpg';
import shield from './Images/shield.jpg';
import camera from './Images/camera.jpg';
import computer from './Images/computer.jpg';
import mask from './Images/mask.jpg';
import santoor from './Images/santoor.jpg';

var heading = [['photography needs', camera], ['Computer accesories',computer],['Masks and faceshields', shield], ['Groceries',santoor],['Pick your masks', mask], ['Cookware & dining', dining], ['Furniture', furniture], ['Matresses', bed]];

class SideScroll extends React.Component {
    render() {
        var cards = heading.map(function (data) {
            return (
                <Card obj={data[0]} image={data[1]} />
            );

        })
        return (
            <div className='toppicks'>
                <h1>Top Picks For You</h1>
                <div className='sidescroller'>
                    {cards}
                </div>
            </div>

        );
    }
}

export default SideScroll;