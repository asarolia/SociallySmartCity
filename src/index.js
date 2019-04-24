import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma';
import './index.css';
import { Main } from './Main.js';
import CityMaps  from './CityMaps.js';
import { City } from './City.js';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'


const Routes = (
    <Router>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/CityMaps" component={CityMaps} />
            <Route exact path="/City" component={City} />
        </Switch>
    </Router>
)

window.onload = () => {
    const element = document.createElement("div");
    document.getElementsByTagName("body")[0].appendChild(element);
    ReactDOM.render(Routes, element);
}
