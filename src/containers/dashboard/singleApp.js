import React from 'react';
import { Card } from './../../components';
import styled from 'styled-components';

const AppTitle = styled.h3`
  margin: 0;
`

const SubTitle = styled.p`
  color: #999;
  margin: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #d7d8d9;
`

export default class SingleApp extends React.Component {

  render(){
    return (
      <Card>
        <AppTitle>{this.props.title}</AppTitle>
        <SubTitle>App Key : {this.props.keyName}</SubTitle>
      </Card>
    );
  }
}

SingleApp.defaultProps = {
  title: 'Sample',
  keyName: '324234dsdsafas'
}