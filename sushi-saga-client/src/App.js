import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: null,
    cost: 0,
    total: 100
  }

  addCost = cost => {
    if (this.state.total > cost) {
      this.setState(prevState => ({
        cost: prevState.cost + cost,
        total: prevState.total - cost
      }))
    }
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        sushis: data
      }, ()=>console.log(this.state))
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={ this.state.sushis } addCost={ this.addCost } total={ this.state.total } />
        <Table cost={ this.state.cost } total={ this.state.total } />
      </div>
    );
  }
}

export default App;