import React from 'react';
import { LoginWrapper, LoginCard, Input, Button, Heading } from './../../components';
import { Link } from 'react-router-dom';
import { BASE_URI, tintColor } from '../../globals';
import { Dialog, CircleProgress } from 'reactackle';

export default class Login extends React.Component {

  constructor(){
    super();
    this.state = {
      loading: false,
      hasError: false,
      errMsg: '',
      email: '',
      password: '',
      icon: 'fa-arrow-right'
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true })
    try{
      const resObj = await fetch(BASE_URI+'/user/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      });
      const res = await resObj.json();
      
      this.setState({ loading: false })
      if(res.err){
        return this.setState({ hasError: true, errMsg: res.err.toString()})
      }
      else{
        this.setState({ hasError: false })
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userData', JSON.stringify(res.data));
        this.props.history.push('/')
      }
    }catch(err){
      this.setState({ loading: false, hasError: true, errMsg: err.toString()})
    }
  }

  render(){

    if(this.props.isLoading){
      this.setState({
        icon: 'fas fa-spinner' 
      })
    }

    return (
      <LoginWrapper>
        <LoginCard>
          <Heading style={{marginBottom: 10}}>Login</Heading>
          <div style={{paddingBottom: 40}}>
            <p style={{color: '#666', textAlign: 'center'}}>Login to get started with CheckPost</p>
          </div>

          {!this.state.loading && this.state.hasError ?
            <div style={styles.errContainer}> {this.state.errMsg} </div> : null
          }

          <form onSubmit={this.handleSubmit}>
            <Input type="email" placeholder="Your Email" value={this.state.email} 
              onChange={e => this.setState({email: e.target.value})} required/>
            <Input type="password" placeholder="Your Password" value={this.state.password}
              onChange={e => this.setState({password: e.target.value})} required/>
            <Button type="submit">Login &nbsp;&nbsp;<i className={`fas ${this.state.icon}`}></i></Button>
          </form>
          <p style={{marginBottom: 0}}>Don't have an account? <Link to="/signup">Signup Now</Link></p>

          <Dialog open={this.state.loading}
            title="Logging you in"
            backdrop
            scrollable
            
          >
            <CircleProgress indeterminate color={tintColor} height={300}/>
          </Dialog>
        </LoginCard>
      </LoginWrapper>
    );
  }
}

const styles = {
  errContainer: {
    background: '#bd3827',
    color: '#fff',
    padding: 15,
    marginBottom: 20,
    borderRadius: 5
  }
}