import React, { Component } from "react";
import classes from './person.css';
import withClass from "../../../hoc/with-class";
import Aux from "../../../hoc/aux";
import PropTypes from "prop-types";
import { AuthContext } from "../../../containers/App";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
    console.log('[Person.js] inside constructor');
  }

  componentWillMount() {
    console.log('[Person.js] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount');
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }
  focus() {
    this.inputElement.current.focus();
  }
  render() {
    console.log('[Person.js] inside render');
    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => auth ? <p>Is Authenticated</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          My name is {this.props.name} & my age is {this.props.age}yrs
        </p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </Aux>
    );
  }
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  click: PropTypes.func
};

export default withClass(Person, classes['person-wrapper']);
