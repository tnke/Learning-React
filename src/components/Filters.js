import React, { Component } from 'react';
import Button from './Button';

class Filters extends Component
{
    constructor(props)
    {
        super(props);

        this.genders = ['male', 'female'];

        this.sortHandler = this.sortHandler.bind(this);
        this.filterHandler = this.filterHandler.bind(this);
    }

    sortHandler(e)
    {
        if (typeof this.props.onSort === 'function') {
            this.props.onSort(e.target.value);
        }
    }

    filterHandler(e)
    {
        if (typeof this.props.onFilter === 'function') {
            this.props.onFilter(e.target.value);
        }
    }

    toTitleCase(str)
    {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    render()
    {
        // set the active sorting class
        var alphaActive = false;
        var indexActive = false;

        if (this.props.activeSort === 'alpha') {
            alphaActive = true;
        } else if (this.props.activeSort === 'index') {
            indexActive = true;
        }

        // create the gender filters
        var genders = [];

        this.genders.forEach((gender, index) => {
            var isActive = this.props.activeGenders.indexOf(gender) > -1;

            genders.push(<Button key={index} text={this.toTitleCase(gender)} value={gender} active={isActive} onClick={this.filterHandler} />)
        })

        return (
            <div className="filters">
                <div>
                    <strong>Sort: </strong>
                    <Button text="Alphabetically" value="alpha" active={alphaActive} onClick={this.sortHandler} />
                    <Button text="By Index" value="index" active={indexActive} onClick={this.sortHandler} />
                </div>
                <div>
                    <strong>Gender: </strong>
                    {genders}
                </div>
            </div>
        );
    }
}

export default Filters;