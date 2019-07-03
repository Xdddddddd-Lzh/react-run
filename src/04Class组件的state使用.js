import React from 'react'
import ReactDom from 'react-dom'

import Hello from "./components/Hello"

class Movie extends React.Component{
    constructor(){
        super();
        this.state={
            actor:'范冰冰'
        }
    }

    render(){
        this.state.actor='王宝强'
        return <div>这是一个class的电影---{this.props.name}--{this.state.actor}</div>
    }
}



ReactDom.render(
    <Movie name="X战警.黑凤凰"></Movie>,
    document.getElementById('root')
)