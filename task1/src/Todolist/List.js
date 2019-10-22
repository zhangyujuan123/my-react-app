import React, { Component } from 'react'

export default class List extends Component {
    delItem=(idx,e)=>{
        this.props.del(idx);
    }
    render() {
        var {show}=this.props;
        return (
                <ul>
                <h2>正在进行--------{this.props.len()}</h2>
                {
                    show.map((item,idx)=>{
                        if(item.done=='true'){
                            return <li key={idx}><input type="checkbox" name={idx} onClick={()=>this.props.change(idx)}/>{item.title}------------<button onClick={this.delItem.bind(this,idx)}>删除</button></li>
                        }
                    })
                }
                <h2>已经完成--------{show.length-this.props.len()}</h2>
                {
                    show.map((item,idx)=>{
                        if(item.done=='false'){
                            return <li key={idx}><input type="checkbox" name={idx} onClick={()=>this.props.change(idx)} checked/>{item.title}------------<button onClick={this.delItem.bind(this,idx)}>删除</button></li>
                        }
                    })
                }
                </ul>
        )
    }
}
