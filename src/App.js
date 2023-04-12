import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import './App.css';
import axios from 'axios';

class App extends Component {
  handleClick() {
    // console.log('done!')

    axios.get('https://api.github.com/users/maecapozzi')
    //.then(response => console.log(response));
    .then(response => this.setState({id:response.data.id}))
  }
  constructor() {
    super();
    this.state = {
      id: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <div className='button_container'>
          <button className='button' onClick={this.handleClick}>push me</button>
          <p>{this.state.id}</p>
        </div>
        <Button type="button" className="btn btn-info">
          <span class="glyphicon glyphicon-search"></span> Search
        </Button>
      </div>
    );
  }
}

export default App;
