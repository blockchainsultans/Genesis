import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Login from './login';
import Lenderdeshboard from './lenderdeshbord';
import Howmanylend from './howmanylend';
import Howmanyloantaken from './howmanyloantaken';
import Admin from './admin';
import Profile from './profile';



export default () =>(
    <Router>
        <Switch>
            <Route exact path ="/" component = {Login} />
            <Route exact path ="/Lenderdeshboard" component = {Lenderdeshboard} />
            <Route exact path ="/Howmanylend" component = {Howmanylend} />
            <Route exact path ="/Howmanyloantaken" component = {Howmanyloantaken} />
            <Route exact path ="/Admin" component = {Admin} />
            <Route exact path ="/Profile" component = {Profile} />
        </Switch>    
    </Router>    
);
  