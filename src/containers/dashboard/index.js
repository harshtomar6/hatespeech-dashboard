import React from 'react';
import { Sidebar, Layout, Content, List, ListItem, Heading } from './../../components';
import { Switch, Route ,withRouter} from 'react-router-dom';
import { getUserApps } from '../../actions/apps'
import Description from './description' 
import ListApps from './listApps';
import User from './user';
import {connect} from 'react-redux'
class Dashboard extends React.Component {

  constructor(){
    super();
    this.state = {
      actives: [true, false, false]
    }
  }

  componentDidMount(){
    if(!localStorage.getItem('loggedIn'))
      this.props.history.push('/login')
    
  }

  handleClick = (path, index) => {
    if(index == 0)
      this.setState({
        actives: [true, false, false]
      })
    else if(index == 1)
      this.setState({
        actives: [false, true, false]
      })
    else
      this.setState({
        actives: [false, false, true]
      })
    this.props.history.push(path);
  }

  render(){
    return(
      <Layout>
        <Sidebar>
          <List>
            <ListItem active={this.state.actives[0]} onClick={() => this.handleClick('/', 0)}>Description</ListItem>
            <ListItem active={this.state.actives[1]} onClick={() => this.handleClick('/app', 1)}>Apps</ListItem>
            
          </List>
        </Sidebar>
        <Content>
          <Switch>
            <Route exact path="/" component={Description}/>
            <Route path="/app" component={ListApps}/>
            <Route path="/user" component={User}/>
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default withRouter(connect(null,{getUserApps})(Dashboard));
