import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Login from './container/Login';
import Right from './components/Right';
import Topic from './container/Topic';
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                </div>
                <div className='content'>
                    <div className="left panel">
                        <Switch>
                            {/* <Route path='/home' component={Home}/> */}
                            <Route path='/start' component={Start}/>
                            <Route path='/api' component={Api}/>
                            <Route path='/about' component={About}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/topic/:id' component={Topic}/>
                            <Route path='/' component={Home}/>
                        </Switch>
                    </div>
                    <div className="right">
                        <Right/>
                    </div>
               </div>
            </Router>
        )
    }
}