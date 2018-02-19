import React, { Component } from 'react';
import Person from './Person';

class PeopleList extends Component
{
    render()
    {
        const items = [];

        this.props.items.forEach((person) => {
            items.push(<Person key={person.index} name={person.fullname} email={person.email} />);
        });

        return (
            <ul className="people-list">
                {items}
            </ul>
        );
    }
}

export default PeopleList;