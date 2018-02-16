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

        this.handleSort = this.handleSort.bind(this);
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

    handleSort(type)
    {
        // sort alphabetically
        if (type === 'alpha') {
            this.setState({
                people: this.state.people.sort(function(a, b) {
                    if (a.fullname < b.fullname) return -1;
                    if (a.fullname > b.fullname) return 1;
                    return 0;
                })
            });

        // sort by index
        } else if (type === 'index') {
            this.setState({
                people: this.state.people.sort((a, b) => a.index - b.index)
            });
        }
    }

    render()
    {
        return (
            <div className="app">
                <Filters onSort={this.handleSort} />
                <PeopleList items={this.state.people} />
            </div>
        );
    }
}

export default App;
