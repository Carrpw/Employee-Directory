import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import API from "./utils/API";

class App extends Component {
  state = {
    API
  };

  removeEmployee = id => {
    const API = this.state.API.filter(employee => employee.id !== id);
    this.setState({ API });
  };

  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        {this.state.API.map(employee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            location={employee.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;