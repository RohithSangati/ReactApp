import React from 'react';
import App1 from './App1.jsx';
import Login from './Signin.jsx';
import Footer from './Footer.jsx';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={App1}></Route>
                <Route path='/login' component={Login}></Route>
            </Switch>
        );
    }
}

export default App;