/** this is how functional compoenet  */
// import {useState} from "react";
// function based component
// const User = () => {
  // example of how to use states in functional component
 //  const [Count1] = useStete(0); // usestate is a react hook which is used to manage state in functional component 
 //  const [Count2] = useStete(0);
//     return (
//         <div className="user-card">   
//             <h1>count:{count1}</h1> // example of how to use states in functional component
//             <h1>count:{count1}</h1>
//             <h1>Name:Archana</h1>
//             <h2>Location:Cambrdige</h2>
//             <h2>email:@ArchanaCambrdige</h2>
//             <h3>Contact:1234567890</h3>
//         </div>
//     )
// }


import React from "react";
import LoggedInUserContext from "../utils/LoggedInUserContext";



class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo:{
        name:"Dummy Name",
        location:"Dummy Location",
        avatar_url:"https://dummyimage.com/600x400/000/fff"
      }
    };
  }
  

// componentDidMount is a lifecycle method which is called after the first render
// it is called only once. Made this async to use await inside it
  async componentDidMount(){
    // best place to make api call
    // this is called after render method
    console.log("componentDidMount - called after first render");
     const data =  await fetch("https://api.github.com/users/ArchanaManju")
    const json = await data.json();
    this.setState({
      userInfo:json
    })
  }


  render() {
    
    // destructuring state object
    const {count, count2} = this.state;
    const {name, location,avatar_url } = this.state.userInfo

    return (
      <div className="user-card">   
          {/* example of how to use states in class component */}
          <h3>count:{count}</h3>
          <button onClick={()=> this.setState({count:this.state.count+1})}>Count</button>
          <h1>Name:{name}</h1>
          <h2>Location:{location}</h2>
          <h2>email:@ArchanaCambrdige</h2>
          <h3>Contact:1234567890</h3>
          <h4><img src={avatar_url} alt="avatar" style={{width:"100px"}}/></h4>
          <div>LoggedIn User<LoggedInUserContext.Consumer>{(loggedInUser)=><h1>{loggedInUser.name}</h1>}</LoggedInUserContext.Consumer></div>
      </div>
    );
  } 
    }   

    export default UserClass;

  /** Lifecycle methods in class component
   * --- Mounting ----
   * constructor() - first method to be called when the component is created with dummy data
   * render() - second method to be called when the component is created with dummy data 
   * 
   *  <Html is created in the DOM with dummy data>
   * componentDidMount() - third method to be called when the component is created, this is phase whendata is fetched from api and setState is called to update the state with api data
   *              - <this.setState> will trigger the render method again and the component will be re rendered with the new data
   * 
   * --- Updating ----this is when the component is updated with new data
   * 
   * render(api data) - first method to be called when the component is updated with new data
   *        <Html is updated in the DOM with new data> 
   * 
   * componentDidUpdate() - second method to be called when the component is updated with new data
   * 
   */
  /**
   * 
   * componetUnmount()
   */