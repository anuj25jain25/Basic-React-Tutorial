import React, { Component } from "react";
import Person from "./Person/Person";
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

  changeThings = name => {
    this.setState({
      persons: [
        {
          name: "Anuj",
          age: "23"
        },
        {
          name: "Kunj",
          age: "25"
        },
        {
          name: name,
          age: "21"
        }
      ]
    });
  };

  inputChange = event => {
    this.setState({
      persons: [
        {
          name: "Anuj",
          age: "23"
        },
        {
          name: "Kunj",
          age: "25"
        },
        {
          name: event.target.value,
          age: "21"
        }
      ]
    });
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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      ':hover': {
        backgroundColor: 'cyan',
        color: 'black'
      }
    }

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.deletePerson.bind(this, index)}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          /> 
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            change={this.inputChange}
          /> */}
        </div>
      );

      style[':hover'] = {
        backgroundColor: 'teal',
        color: 'white'
      }
    }
    return (
      <StyleRoot>
        <div className={classes.App}>
          <h1>Hi there !</h1>
          <button
            style={style}
            onClick={this.toggleDisplayPersons}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
