import React from 'react';
// import { ReactComponent } from '*.svg';
import {getNames, namesList, getClassStats} from "../utils/api";
import Fab from '@material-ui/core/Fab';
import Button from "@material-ui/core/Button"
// import {red, yellow} from "@material-ui/core/colors";
// import { createMuiTheme } from '@material-ui/core';



import "./home.css";
import { GridList } from '@material-ui/core';



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
    this.getClassStats = getClassStats.bind(this);
    // this.namesList = namesList.bind(this);
    
    this.state = {
      className: [],
      nameArray: "",
      namesList: [],
      selectedName: "",


      charName: "",
      charStr: "",
    }
  }
  

  getNamesList = () => {
    getNames().then(() => {
      namesList.map((namesList, i) => {
        // this.setState({className:[...this.state.className, <button className={i} key={namesList.i}>{namesList}</button>]});
        this.setState({className:[...this.state.className, <Button
        onClick={this.getNamesStats}
        variant="contained" 
        color="secondary" key={i} 
        className={"buttonClass btn"+i}
        value={namesList}
        key={namesList.i}> {namesList}
        </Button>]});
        return namesList;
      })
    })
  }
  
  
  
  getNamesStats = event => {
    this.setState({ 
      selectedName: `${event.currentTarget.value}`
    }, () => {
      const userSelect = this.state.selectedName.toLowerCase();
      getStatsCall();
      async function getStatsCall(){
        console.log(userSelect);
        var response = await fetch("https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/classes/" + "" +userSelect+""); 
      

        let data = await response.json().then((data) => {
          console.log(data);
          this.setState({charName: data.name});
        })
      
         
        // console.log(data.name);
        // var DataName = data.name;
      }
    });
  }

      
      
      // getStatsCall = () =>{
      //   async function getNames(){
        
      //   console.log(this.state.selectedName);
        
      //   var response = await fetch("https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/classes/"); 
        
      //   let data = await response.json();
        
      //   console.log(data)
      //   }
      // }
    
    






    render(){
      return (
        
      <div className="startWrapper">
        <div>

        <div className="charDisplayDiv">
         <img src="https://via.placeholder.com/200"></img>        
          <h1>{this.state.charName}</h1>
        </div>

        <div  className="appendedBtnsWrapper">

            <div className="appendedBtns"> {this.state.className}</div>


      <Fab onClick={this.getNamesList} variant="extended" color="secondary" aria-label="delete" className="startButton">
        Start
      </Fab>
        </div>

      
      {/* <h3>{namesList}</h3> */}
{/* 
  <Text>
  {this.props.className}
</Text> */}
</div>
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
