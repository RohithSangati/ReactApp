import React from 'react';
import Card2 from './Card2';
import ime1 from './Images/ime1.jpg';
import ime2 from './Images/ime2.jpg';
import ime3 from './Images/ime3.jpg';
import ime4 from './Images/ime4.jpg';
import ime5 from './Images/ime5.jpg';
import ime6 from './Images/ime6.jpg';
import ime7 from './Images/ime7.jpg';
import ime8 from './Images/ime8.jpg';
import ime9 from './Images/ime9.jpg';
import ime10 from './Images/ime10.jpg';


var data= [
    [ime1,2000],
    [ime10,1500],
    [ime2,5000],
    [ime3,2300],
    [ime4,15000],
    [ime5,1600],
    [ime6,1000],
    [ime7,3000],
    [ime8,500],
    [ime9,3000]
];

class SideScroll2 extends React.Component{
    render() {
        var cards = data.map(function (e) {
            return (
                <Card2 img={e[0]} rate={e[1]}/>
            );
        })
        return (
            <div className='container1'>
                <h3>Top Picks For You <span className='seeMore'> See more</span></h3>
                <div className='sidescroll1'>
                    {cards}
                </div>
            </div>
        )
    }
}

export default SideScroll2;