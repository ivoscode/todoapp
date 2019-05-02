import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'


class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'cut lawn' },
      { id: 2, content: 'get milk' }
    ]
  }
  // Filters out id to delete and replaces the whole state.
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  addTodo = (todo) => {
    todo.id = Math.random(); //Adds id to the new todo
    // Creates new object from state by making copy and adding new todo. Later replaces the whole state with that new object rather than modifying it.
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}
export default App;