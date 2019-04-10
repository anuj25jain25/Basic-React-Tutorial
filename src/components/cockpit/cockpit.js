import React from "react";
import Aux from "../../hoc/aux";

const cockpit = (props) => {

    const style = {
        backgroundColor: 'green',
        color: 'white',
        ':hover': {
            backgroundColor: 'cyan',
            color: 'black'
        }
    }
    style[':hover'] = {
        backgroundColor: 'teal',
        color: 'white'
    }
    let title = 'Default Title';
    
    if(props.appTitle){
        title = props.appTitle.toUpperCase();
    }

    return (
        <Aux>
            <h1>{title}</h1>
            <button
                style={style}
                onClick={props.clicked}>Toggle Persons</button>
        </Aux>
    );
};

export default cockpit;