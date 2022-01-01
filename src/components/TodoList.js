import React, { useState } from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        // /^\s*$/.test(todo.text) is used to check is it empty or not

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    }

    return (
        <div>
            <h1>What's the plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
        </div>
    )
}

export default TodoList

