import React, { Component } from 'react';
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/SearchBox';
import './App.css'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: [],
            monsterFilter: '',
        }
        console.log('Props --> ', props)
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => this.setState({ userName: data }))
    }

    filterMonster = (e) => {
        console.log("Param", e.target.value);
        this.setState({
            monsterFilter: e.target.value
        })
    }

    render() {
        const { userName, monsterFilter } = this.state

        const filteredMonster = userName.filter((monster) => monster.name.toLowerCase().indexOf(monsterFilter.toLowerCase()) !== -1)
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <SearchBox placeholder="Search Monsters..." handleChange={this.filterMonster} />
                    </div>
                    <Cardlist monsters={filteredMonster} />
                </div>
            </div>
        );
    }
}

export default App;