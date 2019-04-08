import styled from 'styled-components';
import { tintColor } from './../globals';

export const LoginWrapper = styled.div`
  background-color: #f7f8f9;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginCard = styled.div`
  background-color: #fff;
  width: 350px;
  border-radius: 5px;
  padding: 30px;
`

export const Input = styled.input`
  width: 100%;
  padding: 12px 10px;
  border: 1px solid ${tintColor};
  display: block;
  box-sizing: border-box
  border-radius: 3px;
  margin-bottom: 20px;
  font-size: 1rem;
  &:focus{
    outline: none;
  }
`

export const Heading = styled.h1`
  color: ${tintColor};
  font-weight: 700;
  text-align: center;
`

export const Button = styled.button`
  background-color: ${tintColor};
  color: #fff;
  border: 1px solid ${tintColor};
  border-radius: 3px;
  padding: 10px 12px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
`

export const Layout = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden
`

export const Sidebar = styled.div`
  background-color: ${tintColor};
  width: 250px;
  flex: 1
  height: 100%;
  padding-top: 50px;
`

export const Content = styled.div`
  flex: 5;
  background-color: #f7f8f9;
  overflow: auto;
  padding: 50px 5%;
`

export const List = styled.ul`
  margin-top: 50px;
  padding: 0;
`

export const ListItem = styled.li`
  list-style: none;
  padding: 10px 15px;
  background-color: ${props => props.active ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
  color: #fff;
  cursor: pointer;
  &:hover{
    background-color: rgba(255, 255, 255, 0.2);
  }
`

export const Grid = styled.div`
  display: flex;
`

export const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin: 15px;
  width: 300px;
`

export const Endpoint = styled.div`
  display:flex;

`

export const Method = styled.div`
  color:${props=>props.color}
`

export const Url = styled.div`
  flex:1;
  padding-left:10px;
  padding-right:20px;
`
export const Headers = styled.div`
  flex:1;
  padding-left:10px;
  padding-right:20px;
`
export const Body = styled.div`
  flex:1;
  padding-left:10px;
  padding-right:20px;
`
export const Response = styled.div`
  flex:1;
  padding-left:10px;
  padding-right:20px;
`