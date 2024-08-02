import React from "react";
import AboutClass from "./AboutClass";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }
    componentDidMount(){
        console.log("Parent Component");
    }
    render(){
        console.log("Parent Render");
        return (
            <div className="about">
            <h1>About</h1> 
            <AboutClass Name={"Name : Pavitra"} Location={"Location : Chennai"}/>
            </div>
        );
    }
}

export default About;