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
switchNameHandler = () => {
  // console.log("is");
  this.setState({
    persons: [
      {name:"Rocky", age:27},
      {name:'Ruby',age:25},
      {name:'Meera',age:20}
      ]
  } )
}

  render() {
    return (
      <div className="App">
        <h1> This is my react app</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies:racing</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello there!!!'));
  }
}

export default App;
