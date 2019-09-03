import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state = {
    persons: [
    {name:"Max", age:27},
    {name:'Ruby',age:25},
    {name:'Meera',age:22}
    ],
    otherState:'some value'
  }
  switchNameHandler = (newName) => {
    //  console.log("is");
    this.setState({
      persons: [
        {name:newName, age:27},
        {name:'Ruby',age:25},
        {name:'Meera',age:20}
        ],
        
        
    } ) 
  }
nameChangedHandler = (event) => {
  this.setState({
    persons: [
      {name:'Max', age:27},
      {name:event.target.value,age:25},
      {name:'Meera',age:20}
      ],
      
      
  } ) 
}

render() {
  const style={
backgroundColor:'white',
font:'inherit',
border:'1px solid blue',
padding:'8px',
cursor:'pointer'
  }
   return (
      <div className="App">
        <h1> This is my react app</h1>
        <p>This is really working</p>
        <button
        style={style}
        onClick={()=>this.switchNameHandler('Farah')}>Switch name</button>
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}/>
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      click={this.switchNameHandler.bind(this,'Angel')}
      changed={this.nameChangedHandler}
      >My hobbies:racing</Person>
      <Person 
      name={this.state.persons[2].name}
       age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello there!!!'));
  }
}

export default App;

