import React, { Component } from 'react';
import Person from './Person';

class PeopleList extends Component
{
    render()
    {
        var people = [];

        this.props.items.forEach((person) => {
            people.push(<Person key={person.index} name={person.fullname} email={person.email} />);
        });

        return (
            <ul className="people-list">
                {people}
            </ul>
        );
    }
}

export default PeopleList;