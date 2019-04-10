import React, { Component } from "react";
import classes from './person.css';
import withClass from "../../../hoc/with-class";
import Aux from "../../../hoc/aux";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] inside constructor');
  }

  componentWillMount() {
    console.log('[Person.js] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount');
  }
  render() {
    console.log('[Person.js] inside render');
    return (
      <Aux>
        <p onClick={this.props.click}>
          My name is {this.props.name} & my age is {this.props.age}yrs
        </p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </Aux>
    );
  }
};

export default withClass(Person, classes['person-wrapper']);
