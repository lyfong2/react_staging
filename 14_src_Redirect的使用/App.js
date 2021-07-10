import React,  {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';
import About from './pages/About';                  // About是路由組件
import Home from './pages/Home';                    // Home是路由組件
import Header from './components/Header';           //Header是一般組件
import MyNavLink from './components/MyNavLink';


export default class App extends Component{
    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 在React中靠路由鏈結實現切換組件--編寫路由鏈結 */}
                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/home/a/b">Home</MyNavLink>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 註冊路由 */}
                            <Switch>
                                <Route exact path="/about" component={About} />
                                <Route exact path="/home" component={Home} />
                                <Redirect to="/home" />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

