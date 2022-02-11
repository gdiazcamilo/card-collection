import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = { monsters: [] };
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

  render() {
    return (
      <div className='App'>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
