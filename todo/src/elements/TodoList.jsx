import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TodoItem from "./TodoItem";

export default class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };

        this.toggleElement = this.toggleElement.bind(this);
    }

    toggleElement(todo) {
        this.props.toggleElement(todo);
    }

    render() {
        return this.props.todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} toggle={this.toggleElement} />
        ))
    }
}

TodoList.propType = {
    todos: PropTypes.array.isRequired,
    toggleElement: PropTypes.func
}
