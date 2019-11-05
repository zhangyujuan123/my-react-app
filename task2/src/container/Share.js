import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';


export default class Share extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        // 发起请求
        let page=this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topics?tab=share&page='+page)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res.data
                // console.log(res)
            })

        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            // 发起请求
            let page=this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?tab=share&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState({
                    data:res.data
                    // console.log(res)
                })
            })
        }
    }
    render(){
        return (
            <div>
            {
            this.state.data.map((item)=>{
            var href1='/topic/'+item.id;
            return(
        <div className="cell">
            <a className="user_avatar pull-left">
              <img src={item.author.avatar_url} title=''/>
            </a>
            <span class="reply_count pull-left">
              <span class="count_of_replies" title="回复数">
                {item.reply_count}
              </span>
              <span class="count_seperator">  /  </span>
              <span class="count_of_visits" title="点击数">
                {item.visit_count}
              </span>
            </span>
            <a class="last_time pull-right" href="/topic/5cbfd9aca86ae80ce64b3175#5dbfc8c4865a9844a301fb50">
              <img class="user_small_avatar" src="https://avatars3.githubusercontent.com/u/56661717?v=4&amp;s=120"/>
              <span class="last_active_time">4 小时前</span>
            </a>
            
            <div class="topic_title_wrapper">
          
              
          <span class="put_top">置顶</span>


              <NavLink class="topic_title" to={'/topic/'+item.id} title={item.title}>
                {item.title}
              </NavLink>
            </div>
          </div>)})
            }
            <div class="pagination">
                <ul>
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=><li><NavLink style={{color:'black'}} to={'/share/'+item}>{item}</NavLink></li>)
                    }
                </ul>
                </div>
          </div>
        )
    }
}
