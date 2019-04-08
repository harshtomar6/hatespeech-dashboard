import React, {Fragment} from 'react'
import { Heading,Endpoint,Method,Url,Headers,Body,Response, Input, Button} from './../../components';
import { BASE_URI } from '../../globals';
export default class Description extends React.Component {

  state = {
    key: '',
    text: '',
    res: null
  }

  handleSubmit = async e => {
    e.preventDefault();

    try{
      const resObj = await fetch(BASE_URI+'/app/evaluate', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'X-Key': this.state.key,
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem('userData')).token}`
        },
        body: JSON.stringify({ text: this.state.text })
      });

      const res = await resObj.json();

      if(res.err)
        return alert(res.err.toString());

      this.setState({res: res.data})

    } catch (err){
      alert(err.toString())
    } 
  }

  render(){
    return (
    <div>
      <Heading>GETTING STARTED</Heading>
        <h3>Welcome to CheckPost</h3>

      <p>Use our RESTful API to check the hate speech and offensive statements before its too late. Give your user a clean environment to share their views on your blogging website, comments and chatting application.</p> 
      
      <p>To detect offensive content in any text : <br/>
          1. Create a new App.<br/>
          2. Copy <strong>APP KEY</strong><br/>
          3. Send a request to following url<br/>
      </p>
      <Endpoint style={{backgroundColor: '#fff', padding: 10}}>
        <Method color='orange'>
          POST
        </Method>
        <Url>http://localhost:5000/app/evaluate</Url>
        <Headers>Headers X-KEY : app key</Headers>
        <Body>Body {'{"text":"Content to be filered"}'}</Body>
        <Response></Response>
      </Endpoint>
      {/* <p>We also offer a <strong>CheckPostBot</strong> for your telegram groups.</p>
      <p>To get started with Telegram Bot - <br/>
          1. Get <strong>APP KEY</strong> from dashboard.<br/>
          2. Search for CheckPostBot on Telegram.<br/>
          3. Add it to your Telegram group and make your group as SuperGroup.<br/>
          4. Make ChatBot as Admin of your Group. <br/>
          5. Send <em>/registerUser APPKEY</em> as a private message to bot.<br/>
          6. Send <em>/registerGroup APPKEY</em> from the group.
      </p> */}

      <h3>Test Now</h3>
      <p>You can test this API by filling out the fields below</p>

      <form onSubmit={this.handleSubmit}>
        <Input id="key" type="text"  placeholder="API KEY" value={this.state.key} 
          onChange={e => this.setState({ key: e.target.value })} required />
        <Input id="text" type="text" placeholder="Text" value={this.state.text} 
          onChange={e => this.setState({ text: e.target.value })} required />
        <Button type="submit" style={{float: 'right', width: 'auto'}}>Test Now</Button>
      </form>

      {this.state.res &&
        <Fragment>
          <h3>Response</h3>
          <p>{Object.keys(this.state.res[0]).map(item => 
            <span>{item+' : '+ this.state.res[0][item]} <br/></span>  
          )}</p>
        </Fragment>
      }

    </div>)
  }
}