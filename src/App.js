import React, { Component, Fragment } from 'react';
import Login from './containers/login';
import Dashboard from './containers/dashboard';
import Signup from './containers/signup';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { tintColor } from './globals';
import styled from 'styled-components'

const Header = styled.div`
  background-color: ${tintColor};
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
`;

const HeaderTitle = styled.h2`
  color: #fff;
  margin: 0;
`

class App extends Component {
  render() {
    return (
      <Fragment>

        <Header mode="fixed" backgroundColor={tintColor} style={{position: 'fixed'}}>
          <HeaderTitle>CheckPost</HeaderTitle>
        </Header>
        <BrowserRouter>
          
          <Switch>
            <Route path='/login' component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path='/' component={Dashboard} />
            
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
