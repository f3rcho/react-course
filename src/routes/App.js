import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';

//explicit return
const App = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
    </BrowserRouter>
)

export default App;