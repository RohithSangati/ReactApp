import React from 'react';
import './Styles.css';
import cart from './Images/cart.png';
import logo from './Images/logo.png';
import NavLinks from './NavLinks.jsx';
import Search from './Search.jsx';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <img src={logo} alt='logo' className='logo' />
                <NavLinks cls='address' subName='     Hello' beforeText='' afterText='    Select your address' icon='fa fa-map-marker'/>
                <Search/>
                <Link to='./login'><NavLinks cls='guest' subName='Hello,Guest' beforeText='Accounts & Lists  ' afterText='' icon='fa fa-caret-down'/></Link>
                <NavLinks cls='returns' subName='Returns' beforeText='&Orders' afterText='' icon=''/>
                <div className='cart linkName'>
                    <img className='cartimg' src={cart}/>
                    <pre class='cartText'>Cart</pre>
                </div>
            </div>
        );
    }
}

export default Navbar;