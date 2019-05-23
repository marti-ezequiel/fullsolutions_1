import React from 'react';
import TodoList from './elements/TodoList'
import todosService from './services/Todo.service'
import './App.css';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);

    todosService.getList().then(todos => {
      this.setState({todos});
    });

    this.state = {
      todos: []
    }

    this.toggleElement = this.toggleElement.bind(this);
  }

  toggleElement(todo) {
    const todosElements = [].concat(this.state.todos);

    this.setState({
      todos: todosElements.map(td => {
        td.succeeded = td.id === todo.id ? !td.succeeded : td.succeeded;
        return td;
      })
    });
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleElement={this.toggleElement} />
      </div>
    )
  }
}
