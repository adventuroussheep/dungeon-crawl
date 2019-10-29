import React from 'react';
// import { ReactComponent } from '*.svg';
import {getNames, namesList} from "../utils/api";
import Fab from '@material-ui/core/Fab';
import Button from "@material-ui/core/Button"
// import {red, yellow} from "@material-ui/core/colors";
// import { createMuiTheme } from '@material-ui/core';



import "./home.css";




// var api = require('../Components/utils/api');
// var nameArray = [];

// const theme = createMuiTheme({
//   palette: {
//     primary: red,
//     secondary: {
//       main: yellow[500],
//       // light: yellow[700],
//     }
//   }
// })


class HomePage extends React.Component{
  constructor(props){
    super(props);
    
    this.getNames = getNames.bind(this);
    // this.namesList = namesList.bind(this);
    
    this.state = {
      className: [],
      nameArray: "",
      namesList: [],
      // namesList: ["asdf"],
    }
  }
  

  changeText = () => {
    getNames().then(() => {
      namesList.map((namesList, i) => {
        // this.setState({className:[...this.state.className, <button className={i} key={namesList.i}>{namesList}</button>]});
        this.setState({className:[...this.state.className, <Button variant="filled" color="secondary" className={i}
        key={namesList.i}> {namesList}
        </Button>]});
        return namesList;
      })

    })
  }

    render(){
      return (
        
      <div className="startWrapper">
      <h1>err, {this.props.repos}</h1>
      <h1> {this.state.className}</h1>
      <div className="centerStartBtn">
      <Fab onClick={this.changeText} variant="extended" color="secondary" aria-label="delete" className="startButton">
        Start
      </Fab>
      </div>
      <h3>{namesList}aa</h3>
{/* 
     <Text>
      {this.props.className}
     </Text> */}
      </div>
  )
}
}


// render(){
  //   return(
    //     <div></div>
    //   )
    // }
    
    
    export default HomePage;
