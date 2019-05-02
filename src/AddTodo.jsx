import React, { Component } from 'react'


class AddTodo extends Component {
  state = {
    content: ''
  }
  // Captures input field values and stores in state
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  // On submit takes the state on this component and gives to function in parrent element. Clears the input fields afterwards.
  handleSubmit = (e) => {
    e.preventDefault(); //prevents page from reloading
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New todo:</label>
          <input type="text" placeholder={'add'} onChange={this.handleChange} value={this.state.content} />
        </form>
      </div>
    )
  }
}

export default AddTodo