import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TodoItem from "./TodoItem";

export default class TodoList extends Component {
    render() {
        return this.props.todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} toggle={this.props.toggleElement} />
        ))
    }
}

TodoList.propType = {
    todos: PropTypes.array.isRequired,
    toggleElement: PropTypes.func
}
