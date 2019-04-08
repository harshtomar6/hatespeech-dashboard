import React from 'react';
import { Heading, Grid, Card, Input, LoginCard, Button } from './../../components';
import SingleApp from './singleApp';
import {connect} from 'react-redux';
import { Dialog, CircleProgress } from 'reactackle'
import { tintColor, BASE_URI } from './../../globals';

export default class ListApps extends React.Component {

  state = {
    modal: false,
    name: '',
    loading: false,
    hasError: false,
    data: [],
    errMsg: ''
  }

  async componentDidMount(){
    await this._fetchApps()
  }

  _renderList = ()=>{
    if(this.state.loading)
      return <CircleProgress indeterminate color={tintColor} height={300}/>
    return this.state.data.map(item => <SingleApp title={item.name} key={item._id} keyName={item._id}/>)
  }

  _handleSubmit = async e => {
    e.preventDefault();

    try{
      const resObj = await fetch (BASE_URI+'/app', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem('userData')).token}`
        },
        body: JSON.stringify({name: this.state.name})
      });

      const res = await resObj.json();

      if(res.err){
        return this.setState({ createAppError: true, createAppErrorMsg: res.err.toString()})
      }

      this.setState({ modal: false });
      this._fetchApps()
    }catch(err){

    }
  }

  _fetchApps = async () => {
    this.setState({ loading: true })
    try{
      const resObj = await fetch(BASE_URI+'/user/apps', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem('userData')).token}`
        }
      });

      const res = await resObj.json();
      console.log(res)

      this.setState({ loading: false })
      if(res.err)
        return this.setState({ hasError: true, errMsg: res.err.toString() })

      this.setState({ data: res.data })

    } catch (err){
      this.setState({ loading: false, hasError: true, errMsg: err.toString() })
    }
  }

  render(){
    return (
      <div>
        <Heading>My Apps</Heading>
        <Grid>
          {this._renderList()}
          <div style={styles.container} role="button" onClick={() => this.setState({ modal: true })}>
            Create New App
          </div>
        </Grid>
        {/* <Heading>Create New App</Heading>
        <LoginCard>
          <form>
            <Input type="text" placeholder="Enter App Name" required />
            <Input type="text" placeholder="Enter App Description" />
            <Button type="submit">Create</Button>
          </form>
        </LoginCard> */}
        <Dialog open={this.state.modal}
          title="Create New App"
          backdrop
          onClose={() => this.setState({ modal: false })}
          haveCloseButton
        >
          <form onSubmit={this._handleSubmit}>
            <Input id="appName" type="text" placeholder="Enter App Name" value={this.state.name} 
                onChange={e => this.setState({name: e.target.value})} 
                style={{marginTop: 20}} required/>

            <Button style={{width: 'auto', float: 'right'}} type="submit">Create App</Button>
          </form>
        </Dialog>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    margin: 15,
    width: 300,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    cursor: 'pointer'
  }
}