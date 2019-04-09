import React, { Component } from "react";
import Persons from "../components/persons/persons";
import Cockpit from "../components/cockpit/cockpit";
import Radium, { StyleRoot } from "radium";
import classes from "./App.css";

class App extends Component {
  state = {
    persons: [
      {
        name: "Anuj Jain",
        age: "22",
        id: 1
      },
      {
        name: "Kunj Jain",
        age: "24",
        id: 2
      },
      {
        name: "kunal Jain",
        age: "20",
        id: 3
      }
    ],
    showPersons: false
  }; 

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  }

  toggleDisplayPersons = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  deletePerson = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons} changed={this.nameChangeHandler} clicked={this.deletePerson} />
        </div>
      );
    }
    return (
      <StyleRoot>
        <div className={classes.App}>
        <Cockpit
        appTitle={this.props.title}
        clicked={this.toggleDisplayPersons } />
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
