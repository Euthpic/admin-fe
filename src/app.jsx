import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';

import Layout from 'component/layout/index.jsx';
import NavTop from 'component/nav-top/index.jsx';
import NavSide from 'component/nav-side/index.jsx';

//页面
import Home from 'page/home/index.jsx';



class App extends React.Component {
    render() {
        return (

            <Router>
                <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route  path="/product" component={Home} />
                    <Route  path="/product-category" component={Home} />
                </Switch>
                </Layout>
            
            </Router>



        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);