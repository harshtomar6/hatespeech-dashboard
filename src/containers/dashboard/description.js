import React from 'react'
import { Heading,Endpoint,Method,Url,Headers,Body,Response} from './../../components';
export default class Description extends React.Component {
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

    </div>)
  }
}