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
            people: []
        }

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

    handleFilter()
    {
        this.setState({
            people: this.state.people.sort(function(a, b) {
                if (a.fullname < b.fullname) return -1;
                if (a.fullname > b.fullname) return 1;
                return 0;
            })
        });
    }

    render()
    {
        return (
            <div className="app">
                <Filters handler={this.handleFilter} />
                <PeopleList items={this.state.people} />
            </div>
        );
    }
}

export default App;
