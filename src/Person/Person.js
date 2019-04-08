import React from "react";
import Radium  from 'radium';
import classes from './person.css';

const Person = props => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }
  return (
      <div className={classes['person-wrapper']} style={style}>
        <p onClick={props.click}>
          My name is {props.name} & my age is {props.age}yrs
      </p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
  );
};

export default Radium(Person);
