import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Messages from './Messages/Messages.js';

class App extends Component {

  render() {
    return (
      <div>
      
        <Messages color='blue'></Messages>
=======


class App extends Component {
  state = {users: [], messages:[]}

  componentDidMount() {
    fetch('/api/users',{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(res => res.json())
      .then(users => this.setState({ users }));

      fetch('/api/messages',{
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
        .then(res => res.json())
        .then(messages => this.setState({ messages }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.local.password}>{user.local.email}</div>

        )}
        <h1>Messages</h1>
        {this.state.messages.map(message =>
          <div key={message.snack}>{message.snack},{message.thumbUp}</div>

        )}
>>>>>>> 3c31bf4f0dd71a387e8e94e25218e2658f3ccc91
      </div>
    );
  }
}

export default App;
