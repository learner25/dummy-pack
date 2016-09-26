import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

import {render} from "react-dom";
require("style!./css/style.css") 
var classnames=require('classnames')
 

var allItems = []
 
 

 
 
class App extends React.Component {
  constructor(props){
    super(props);
    this.addEvent = this.addEvent.bind(this);
  }

  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', event);
    console.log('Data: ', data);
  };



  getInitialState() {
    return { allItems };
  }
  render() {
     

    var items = this.props.items.map((item) => {

       var mystyle={ 
        padding: 10,
        margin: 10,
        backgroundImage:'url('+item+')',
        boxSizing:'border-box',
        float:'left',
        textAlign: "center",
        backgroundSize:"contain",
        width:"50px",
        height:"50px"
      }
      return (
         <Draggable
        
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        
        zIndex={100}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div key={Math.random()*Date.now()}  className="handle" style={mystyle}></div>
         </Draggable>
        );
    })
    return(
     
      <div>
         {items} 
        <p><NewAppItem addEvent={this.addEvent} /></p>
      </div>
     
    );
  }
  addEvent(appItem){
    allItems.push(appItem.newItem,);
    this.setState({ allItems });
  }
}
 
class AppItem extends React.Component {
  render(){
    return <div>{this.props.item}</div>;
  }
}
 
class NewAppItem extends React.Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
   
  render(){
    return (<div>
       
      <div className="canver" onDrop={this.onSubmit} onDragOver={this.allowdrop}></div>
    </div>);
  }
  onSubmit(e){
    var data = e.dataTransfer.getData("text");
    console.log('something dropped :'+data)
    event.preventDefault();
    var input = data
    var newItem = data ;
    this.props.addEvent({ newItem });
    //input.value = '';
  }
  allowdrop(e){
  e.preventDefault();
  }
}
  
render(<App items={allItems} />, document.getElementById('container'));