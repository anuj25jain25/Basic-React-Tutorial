import React, { PureComponent } from "react";
import Person from "./Person/Person";
import ErrorBoundary from "../ErrorBoundary/errorBoundary";

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        this.lastPersonRef = React.createRef();
        console.log('[Persons.js] inside constructor');
    }

    componentWillMount() {
        console.log('[Persons.js] inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Persons.js] inside componentDidMount');
        this.lastPersonRef.current.focus();
    }

    componentWillReceiveProps(nextProps) {
        console.log('[Update Persons.js] inside componentWillReceiveProps', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Update Persons.js] inside shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
    // }
    componentDidUpdate() {
        console.log('[Update Persons.js] inside componentDidUpdate');
    }
    render() {
        return this.props.persons.map((person, index) => {

            // const rnd = Math.random();
            // if (rnd > 0.7) {
            //   throw new Error('Something Went Wrong');
            // }

            return (
                <ErrorBoundary key={person.id}>
                    <Person
                        name={person.name}
                        age={person.age}
                        position={index}
                        ref={this.lastPersonRef}
                        click={() => this.props.clicked(index)}
                        changed={(event) => this.props.changed(event, person.id)}
                    />
                </ErrorBoundary>
            );
        });
    }
}

export default Persons;