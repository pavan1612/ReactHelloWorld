import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import styled from "styled-components";

const StyledButton = styled.button`
background-color: ${(props) => props.alt ? "red" : "green"};
border: 1px solid #eee;
padding: 8px;
cursor: pointer;
color:white;
&:hover {
  background-color: ${(props) => props.alt ? "salmon" : "lightgreen"};
  color:black;
}
`;

class App extends Component {
  state = {
    person: [
      { id: "jdgcAj", name: "Pavan", age: "25" },
      { id: "sKCUUCA", name: "Kishore", age: "21" },
      { id: "AJBOUI", name: "Manu", age: "18" },
    ],
    nameToggle: true,
  };

  nameChnagedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex((p) => p.id === id);
    const persons = [...this.state.person];
    persons[personIndex].name = event.target.value;
    this.setState({
      person: persons
    })
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({ person: persons })

  }

  toggleHandler = () => {
    this.setState({
      nameToggle: !this.state.nameToggle
    })
  }

  render() {
    let persons = null;
    if (this.state.nameToggle) {
      persons = <div>
        {
          this.state.person.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              // click={() => this.switchnameHandler("Pavan")}
              changed={(event) => this.nameChnagedHandler(event, person.id)}
              delete={() => this.deletePersonHandler(index)}
              key={person.id}
            />
          })
        }
      </div>
    }
    return (
      <div className="App">
        <h1>Hi im a react app</h1>
        <StyledButton alt={this.state.nameToggle} onClick={this.toggleHandler}>
          Toggle names
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
