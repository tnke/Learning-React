import React, { Component } from 'react';
import axios from 'axios';
import Filters from './components/Filters';
import PeopleList from './components/PeopleList';

class App extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            sort: 'index',
            genders: ['male', 'female'],
            people: []
        }

        this.handleSort = this.handleSort.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    componentDidMount()
    {
        // load people from the data source
        axios.get(this.props.dataSrc)
            .then((response) =>
            {
                this.setState({
                    people: response.data.people
                });
            });
    }

    handleSort(method)
    {
        var people = this.state.people;

        if (method === 'alpha') {
            people.sort(function(a, b) {
                if (a.fullname < b.fullname) return -1;
                if (a.fullname > b.fullname) return 1;
                return 0;
            });
        } else if (method === 'index') {
            people.sort((a, b) => a.index - b.index);
        }

        this.setState({
            sort: method,
            people: people
        });
    }

    handleFilter(filter)
    {
        //var people = this.state.people;
        var genders = this.state.genders;
        var index = genders.indexOf(filter);

        genders.push(filter);

        if (index > -1) {
            genders = genders.filter(function(i) {
                return i !== filter
            });
        } else {
            genders.push(filter);
        }

        this.setState({
            genders: genders
        });
    }

    render()
    {
        return (
            <div className="app">
                <Filters activeSort={this.state.sort} activeGenders={this.state.genders} onSort={this.handleSort} onFilter={this.handleFilter} />
                <PeopleList items={this.state.people} />
            </div>
        );
    }
}

export default App;
