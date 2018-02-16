import React, { Component } from 'react';

class Person extends Component
{
    render()
    {
        return (
            <li className="person">
                <h4>{this.props.name}</h4>
                <p>{this.props.email}</p>
            </li>
        );
    }
}

export default Person;