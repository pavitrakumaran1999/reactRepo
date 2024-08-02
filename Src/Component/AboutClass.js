import React from "react";
class AboutClass extends React.Component{
    constructor (props)
{
    super(props);
    this.state = {
    }
    // console.log(props);
    // console.log("child Constructor")
};
async componentDidMount()
{
   const data=await fetch("https://api.github.com/users/pavitrakumaran1999") ;
   const json=data.json();
   console.log(json);
}
    render()
    {
       // console.log("Child Render");
        const {Name,Location} = this.props;
        // const {count} =this.state;
         return (
             <div className= "user-card">
                <h2>{Name}</h2>
                <h3>{Location}</h3>
            </div>
        )
    }
}

export default AboutClass;