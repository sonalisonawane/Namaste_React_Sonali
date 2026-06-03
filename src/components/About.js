import React from 'react'
import UserClass from './UserClass';

class About extends React.Component {
  constructor(props){
    super(props);
    console.log("Parent constructor called");
  }
  componentDidMount(){
    console.log("parent component didMount")
  }
  render(){
    console.log("Parent Render called");
  return (
    <>
    <h1>About Us</h1>

    <UserClass name={"first"} location={"bangalore"} contact={"9970084395"}/>
    <UserClass name={"second"} location={"bangalore"} contact={"9970084395"}/>
    <UserClass name={"third"} location={"bangalore"} contact={"9970084395"}/>
    </>
  )
}
}

export default About;