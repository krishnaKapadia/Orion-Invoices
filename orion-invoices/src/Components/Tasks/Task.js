import React, { Component } from 'react';

class Task extends Component {

  constructor(props){
    super(props)

    this.state = {
      completed: false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ completed: !this.state.completed })
  }

  render() {
    return (
      <tr>
        <td>{this.props.task}</td>
        <td><input type="checkbox" onClick={this.toggle}/></td>
      </tr>
    );
  }

}

export default Task;
