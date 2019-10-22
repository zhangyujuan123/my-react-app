import React, { Component } from 'react'
import Input from './Input'
import List from './List';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state={
            todo:[]
        }
    }
    addItem = (data)=>{
        // this.state.todo.push(data);
        this.setState({
            todo: [...this.state.todo,data]
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo))
        })
    }
    delItem=(idx,e)=>{
        let todo=[...this.state.todo];
        todo.splice(idx,1);
        this.setState((state,props)=>{
            console.log(state.todo);   //拿到的是前一个state的todo
            return {
                todo:state.todo.filter((item,index)=>idx!==index)
            }
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo))
        })
    }
    changeItem=(idx)=>{
        let todo=[...this.state.todo];
        if(todo[idx].done=='true'){
            todo[idx].done='false';
        }
        else{
            todo[idx].done='true';
        }
        this.setState((state,props)=>{
            console.log(state.todo);
            return {
                todo:todo
            }
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo))
        })
    }
    componentDidMount(){
        if(localStorage.getItem('todo')){
            let a=eval(localStorage.getItem('todo'));
            this.setState({
                todo:a
            })
        }
    }
    dolength=()=>{
        let todo=[...this.state.todo];
        var len=0;
        for(var i=0;i<todo.length;i++){
            if(todo[i].done=='true'){
                len++;
            }
        }
        return len;
    }
    render() {
        return (
            <div>
                <Input add={this.addItem}/>
                <List show={this.state.todo} del={this.delItem} change={this.changeItem} len={this.dolength}/>
            </div>
        )
    }
}
