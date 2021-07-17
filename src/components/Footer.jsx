import React from 'react';
import Info from './Info.jsx';

var desc = [
    [['Get to Know Us'],['About Us','Careers','Press Releases','Amazon Cares','Gift a Smile']],
    [['Connect with Us'],['Facebook','Twitter','Instagram']],
    [['Make Money with Us'],['Sell on Amazon','Sell under Amazon Accelerator','Amazon Global Selling','Become an Affiliate','Fulfilment by Amazon','Advertise Your Products']],
    [['Let Us Help You'],['COVID-19 and Amazon','Your Account','Returns Centre','100% Purchase Protection','Amazon App Download','Amazon Assistant Download','Help']],
];

class Footer extends React.Component {
    render() {
        var cards=desc.map(function(e){
            return(
                <Info heading={e[0]} data={e[1]}/>
            );
        })
        return(
            <div className='foot'>
                {cards}
            </div>
        )
    }
}

export default Footer;