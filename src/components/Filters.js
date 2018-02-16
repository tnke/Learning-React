import React, { Component } from 'react';

class Filters extends Component
{
    render()
    {
        return (
            <div className="filters">
                <strong>Sort: </strong>
                <button onClick={this.props.handler}>Alphabetically</button>
                <button onClick={this.props.handler}>By Index</button>
            </div>
        );
    }
}

export default Filters;