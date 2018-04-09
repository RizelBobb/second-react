import React, { Component } from 'react';
import './Messages.css';

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
   const style = {
     backgroundColor: this.props.color

   }
    return (
      <div >
        <h1 className="Messages-header">Users</h1>
        {this.state.users.map(user =>
          <div className="Messages" style={style} key={user.local.password}>{user.local.email}</div>

        )}
        <h1 className="Messages-header">Messages </h1>
        {this.state.messages.map(message =>
          <div className="Messages" style={style} key={message.snack}>{message.snack}:{message.thumbUp}</div>

        )}
      </div>
    );
  }
}

export default App;
