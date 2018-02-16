import React, { Component } from 'react';
import axios from 'axios';
import Filters from './components/Filters';
import PeopleList from './components/PeopleList';

class App extends Component
{
    constructor(props)
    {
        super(props);

        this.people = [];
        this.state = {
            sort: 'index',
            genders: ['male', 'female'],
            filteredPeople: []
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    componentDidMount()
    {
        // load people from the data source
        axios.get(this.props.dataSrc)
            .then((response) =>
            {
                this.people = response.data.people;

                this.setState({
                    filteredPeople: this.people
                });
            });
    }

    handleFilter(type, filter)
    {
        var people = this.people;
        var genders = this.state.genders;
        var filteredPeople = this.state.filteredPeople;
        var sort = type === 'sort' ? filter : this.state.sort;

        // handle filtering

        if (type === 'gender') {
            var i = genders.indexOf(filter);

            if (i > -1) {
                genders = genders.filter(gender => gender !== filter);
            } else {
                genders.push(filter);
            }

            filteredPeople = people.filter(person => genders.indexOf(person.gender) > -1);
        }

        // handle sorting

        if (sort === 'alpha') {
            filteredPeople.sort(function(a, b) {
                if (a.fullname < b.fullname) return -1;
                if (a.fullname > b.fullname) return 1;
                return 0;
            });
        } else if (sort === 'index') {
            filteredPeople.sort((a, b) => a.index - b.index);
        }

        // set the state

        this.setState({
            sort: sort,
            genders: genders,
            filteredPeople: filteredPeople
        });
    }

    render()
    {
        return (
            <div className="app">
                <Filters activeSort={this.state.sort} activeGenders={this.state.genders} onChange={this.handleFilter} />
                <PeopleList items={this.state.filteredPeople} />
            </div>
        );
    }
}

export default App;
