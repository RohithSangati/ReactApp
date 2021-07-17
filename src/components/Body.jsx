import React from 'react';
import Carousel from './Carousel.jsx';
import SideScroll from './SideSroll.jsx';
import add from './Images/add.jpg';
import SideScroll1 from './SideScroll1.jsx';
import SideScroll2 from './SideScroll2.jsx';

class Body extends React.Component {
    render() {
        return (
            <div className='body'>
                <Carousel />
                <SideScroll />
                <SideScroll1/>
                <div className='add'>
                    <img src={add} />
                </div>
                <SideScroll2/>
            </div>
        );
    }
}

export default Body;
