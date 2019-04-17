import React, { PureComponent } from "react";
import Persons from "../components/persons/persons";
import Cockpit from "../components/cockpit/cockpit";
import classes from "./App.css";
import withClass from "../hoc/with-class";
import Aux from "../hoc/aux";

export const AuthContext = React.createContext(false);
class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor');
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[App.js] inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[App.js] inside componentWillUpdate ', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[App.js] inside componentDidUpdate');
  }

  state = {
    persons: [
      {
        name: "Anuj Jain",
        age: 22,
        id: 1
      },
      {
        name: "Kunj Jain",
        age: 24,
        id: 2
      },
      {
        name: "kunal Jain",
        age: 20,
        id: 3
      }
    ],
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
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
    this.setState((prevState, props) => {
      return {
        showPersons: !prevState.showPersons,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  };

  deletePerson = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  loginHandler = () => {
    this.setState({
      authenticated: true
    })
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log('[App.js] inside getDerivedStateFromProps',
    nextProps,
    prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate(){
    console.log('[App.js] inside getSnapshotBeforeUpdate');
  }

  render() {
    console.log('[App.js] inside render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            changed={this.nameChangeHandler}
            clicked={this.deletePerson} />
        </div>
      );
    }
    return (
      <Aux>
        <button onClick={() => this.setState({ showPersons: true })}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          clicked={this.toggleDisplayPersons}
          login={this.loginHandler} />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
