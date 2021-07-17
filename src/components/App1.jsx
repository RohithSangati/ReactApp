import React from 'react';
import Navbar from './Navbar.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

class App1 extends React.Component {
    render() {
        return (
            <div>
                <div class='main'>
                    <Navbar />
                    <Body />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App1;