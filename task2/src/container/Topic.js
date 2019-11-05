import React, { Component } from 'react'

export default class Topic extends Component {
    constructor(){
        super();
        this.state={
            data:{}
        }
    }
    componentDidMount(){
        // 发起请求
        let id=this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topic/'+id)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.data
            })

        })
    }
    componentDidUpdate(){
        // 发起请求
        let id=this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topic/'+id)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.data
            })

        })
    }
    render(){
        return(
            <div className='inner'>
                <div dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
            </div>
        )
    }
}
