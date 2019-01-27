import React, { Component } from 'react';
// import HeaderComponent from './layout';
import { Switch, Route } from 'react-router-dom'

import CareerComponent from './career';
import LandingPage from './landingPage';
import DescriptionComponent from './description';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path={"/description/:id"} component={DescriptionComponent} />
        {/* <Route path="/career" component={CareerComponent} /> */}
    </Switch>
)
export default Main;