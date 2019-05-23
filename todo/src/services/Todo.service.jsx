import { Component } from 'react'

export class TodoService extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            todos: [
                {
                    id: 1,
                    title: 'Hacer lista en react',
                    succeeded: true
                }, {
                    id: 2,
                    title: 'Agregar elementos a la lista',
                    succeeded: true
                }, {
                    id: 3,
                    title: 'Poder marcar como terminados los elementos',
                    succeeded: false
                }, {
                    id: 4,
                    title: 'Incluir un form para agregar más elementos',
                    succeeded: false
                }, {
                    id: 5,
                    title: 'Pushear cambios',
                    succeeded: false
                }
            ]
        };

        this.getList.bind(this);
    }

    async getList() {
        return this.state.todos;
    }
}

const todosService = new TodoService();
export default todosService;