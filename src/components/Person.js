import React, { Component } from 'react';

class Person extends Component
{
    render()
    {
        return (
            <li className="person">
                <h4 className="name">{this.props.name}</h4>
                <p className="email">{this.props.email}</p>
            </li>
        );
    }
}

export default Person;