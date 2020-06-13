import React, { Component } from 'react';

class Statefull extends Component {
    //ciclo de vida app, states, events
    constructor(props) {
        //init the props
        super(props)
        //binding o state assigment
        this.state = {
            hello: 'Hola Mundo',
            name: 'Fernando'
        }
    }
    // html to push
    render() {
        return(
            <h1>{this.state.hello} {this.state.name}</h1>
        )
    }
}

export default Statefull;