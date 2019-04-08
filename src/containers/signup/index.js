import React from 'react';
import { LoginWrapper, LoginCard, Input, Button, Heading } from './../../components';
import { Link } from 'react-router-dom';
import { BASE_URI, tintColor } from '../../globals';
import { Dialog, CircleProgress } from 'reactackle';

export default class Signup extends React.Component {

  state = {
    loading: false,
    hasError: false,
    errMsg: '',
    name: '',
    email: '',
    password: ''
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    try{
      const resObj = await fetch(BASE_URI+'/user/signup', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        })
      });

      const res = await resObj.json();
      this.setState({ loading: false })
      if(res.err){
        return this.setState({ hasError: true, errMsg: res.err })
      }
      
      this.setState({ hasError: false });
      await this.loginUser({
        email: this.state.email,
        password: this.state.password
      })
      
    }catch (err) {
      console.log(err);
      this.setState({ loading: false, hasError: true, errMsg: err.toString() })
    }
  }

  loginUser = async data => {
    try{
      const resObj = await fetch(BASE_URI+'/user/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const res = await resObj.json();
      
      this.setState({ loading: false })
      if(res.err){
        this.setState({ hasError: true, errMsg: res.err.toString()})
      }
      else{
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userData', JSON.stringify(res.data));
        this.props.history.push('/')
      }
    }catch(err){
      this.setState({ loading: false, hasError: true, errMsg: err.toString()})
    }
  }

  render(){
    return (
      <LoginWrapper>
        <LoginCard>
          <Heading style={{marginBottom: 10}}>Signup</Heading>
          <div style={{paddingBottom: 40}}>
            <p style={{color: '#666', textAlign: 'center'}}>Signup to get started with CheckPost</p>
          </div>
          {!this.state.loading && this.state.hasError ?
            <div style={styles.errContainer}> {this.state.errMsg} </div> : null
          }
          <form onSubmit={this.handleSubmit}>
            <Input type="text" placeholder="Your Name" value={this.state.name} 
              onChange={e => this.setState({name: e.target.value})} required/>
            <Input type="text" placeholder="Your E-mail" value={this.state.email} 
              onChange={e => this.setState({email: e.target.value})} required/>
            <Input type="password" placeholder="Your Password" value={this.state.password}
              onChange={e => this.setState({password: e.target.value})} required/>
            <Button type="submit">Create Account &nbsp;&nbsp;<i className={`fas ${this.state.icon}`}></i></Button>
            <p style={{marginBottom: 0}}>Already have an account? <Link to="/login">Login Now</Link></p>
          </form>

          <Dialog open={this.state.loading}
            title="Creating Your Account"
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