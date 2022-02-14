import React, { Component } from "react";

import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = { monsters: [], searchField: "" };
  }

  loadMonstersWithThenSyntax() {
    console.log("loading with then syntax");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  loadMonstersWithAsyncSyntax = async () => {
    console.log("loading with async syntax");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    this.setState({ monsters: users });
  };

  componentDidMount() {
    this.loadMonstersWithThenSyntax();
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const filteredMonsters = this.state.monsters.filter((m) =>
      m.name.toLowerCase().includes(this.state.searchField)
    );

    return (
      <div className='App'>
        <h1>Robot cards</h1>
        <SearchBox
          placeholder='monster name'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
