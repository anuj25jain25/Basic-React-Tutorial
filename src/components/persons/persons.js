import React from "react";
import Person from "./Person/Person";
import ErrorBoundary from "../ErrorBoundary/errorBoundary";

const persons = (props) =>
    props.persons.map((person, index) => {

        // const rnd = Math.random();
        // if (rnd > 0.7) {
        //   throw new Error('Something Went Wrong');
        // }

        return (
            <ErrorBoundary key={person.id}>
                <Person
                    name={person.name}
                    age={person.age}
                    click={() => props.clicked(index)}
                    changed={(event) => props.changed(event, person.id)}
                />
            </ErrorBoundary>
        );
    });

export default persons;