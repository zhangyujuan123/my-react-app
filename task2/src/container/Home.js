import React, { Component } from 'react'
import {Link,Route,Switch} from 'react-router-dom';
import Test from './Test';
import All from './All';
import Jinghua from './Jinghua';
import Job from './Job';
import Question from './Question';
import Share from './Share';
export default class Home extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    render() {
        let {url} = this.props.match;
        return (
            <div>
                <div className='header'>
                    <Link to='/all/1' className='topic-tab'>全部</Link>
                    <Link to='/jinghua/1' className='topic-tab'>精华</Link>
                    <Link to='/share/1' className='topic-tab'>分享</Link>
                    <Link to='/question/1' className='topic-tab'>问答</Link>
                    <Link to='/job/1' className='topic-tab'>招聘</Link>
                    <Link to='/test/1' className='topic-tab'>客户端测试</Link>
                </div>
                <div>
                    <Switch>
                        <Route path='/all/:id'  component={All}/>
                        <Route path='/jinghua/:id' component={Jinghua}/>
                        <Route path='/share/:id'  component={Share}/>
                        <Route path='/question/:id' component={Question}/>
                        <Route path='/job/:id' component={Job}/>
                        <Route path='/test/:id' component={Test}/>
                        {/* <Route path={`${url}/test/:id`} component={Topic}/> */}
                        <Route path='/' component={All}/>
                    </Switch>
                </div>
            </div>
        )
    }
}