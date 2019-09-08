import React from 'react';
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Header from './Header';
import Home from "./../Routes/Home";
import Tv from "./../Routes/Tv";
import Search from "./../Routes/Search";

export default () => (

    <Router>
        <>
            <Header />
            <Switch>
                {/* path는 도메인 요청, component는 그 입력에 따라 실행되는 주소(import한 값). 도메인 뒤에 아래를 입력하면, 해당 파일을 불러온다. */}
                <Route path="/" exact component={Home} />
                <Route path="/tv" component={Tv} />
                <Route path="/search" component={Search} />
                <Redirect from="*" to="/" />
            </Switch>

            
        </>
        
    </Router>
);