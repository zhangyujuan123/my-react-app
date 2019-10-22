import React, { Component } from 'react'

export default class Input extends Component {
    handleInput = (e)=>{
        if(e.keyCode===13){
            var val={'title':e.target.value,'done':'true'};
            this.props.add(val);
        }
    }
    render() {
        return (
            <div>
                <h2>Todolist</h2>
                <input type="text" name="inp" onKeyDown={this.handleInput}/>
            </div>
        )
    }
}
