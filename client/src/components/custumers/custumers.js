import React, { Component } from 'react';
import './custumers.css';

class Custumers extends Component {
  constructor() {
    super();
    this.state = {
      custumers: []
    };
  }

  componentDidMount = () => {
    fetch('/api/custumers')
      .then(res => res.json())
      .then(custumers =>
        this.setState({ custumers }, () => {
          console.log('Custumers Fetched...', custumers);
        })
      );
  };
  render() {
    return (
      <div className="App">
        <h2>Custumers</h2>
        <ul>
          {this.state.custumers.map(custumer => (
            <li key={custumer.id}>
              {custumer.firstname} {custumer.lastname}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Custumers;
