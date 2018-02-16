import React, { Component } from 'react';
import Button from './Button';

class Filters extends Component
{
    constructor(props)
    {
        super(props);

        this.sortHandler = this.sortHandler.bind(this);
    }

    sortHandler(e)
    {
        if (typeof this.props.onSort === 'function') {
            this.props.onSort(e.target.value);
        }
    }

    render()
    {
        return (
            <div className="filters">
                <strong>Sort: </strong>
                <Button text="Alphabetically" value="alpha" clickHandler={this.sortHandler} />
                <Button text="By Index" value="index" clickHandler={this.sortHandler} />
            </div>
        );
    }
}

export default Filters;