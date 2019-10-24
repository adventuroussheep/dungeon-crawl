import React from 'react';
// import { ReactComponent } from '*.svg';
import {getNames, namesList} from "../Components/utils/api";
import Fab from '@material-ui/core/Fab';

var api = require('../Components/utils/api');
// var nameArray = [];


class Character extends React.Component{
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
        this.setState({className:[...this.state.className, <button className={i} key={namesList.i}>{namesList}</button>]});
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
      <Fab onClick={this.changeText} variant="extended" color="primary" aria-label="delete" className="startButton">
        Start
      </Fab>
      </div>
      <h3>{namesList}aa</h3>
      </div>
  )
}
}

    
    export default Character;
