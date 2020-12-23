import React, {useState} from 'react';
import {TodoList} from "./components/todo-list";
import {NewTodo} from "./components/new-todo";
import {ToDo} from "./models/todo.model";

export const App: React.FC = () => { // Function Component - f() that returns jsx
    const todosInitialArray = [
        {id: 't1', text: 'Finish TS'},
        {id: 't2', text: 'Finish HTML'},
        {id: 't3', text: 'Finish CSS'}
    ];

    const [todos, setTodos] = useState<ToDo[]>(todosInitialArray); // useState returns 2 elements: last array snapshot and f() to update that state and to re-render component
    // [todos, setTodos] - desctructuring

    const addTodoHandler = (newTodoText: string) => {
        const todo = {id: Math.random().toString(), text: newTodoText};
        // setTodos([...todos, tod0]);  // OR the same, but with f() call for previous state
        setTodos(prevTodos => [...todos, todo]);
    };

    const todoDeleteHandler = (id: string) => {
        setTodos(prevTodos => {
            return todos.filter(todo => todo.id !== id);
        });
    };

    return (
        <div className="App">
            <NewTodo onAddingTodo={addTodoHandler}/>
            <TodoList items={todos}
                      onTodoDelete={todoDeleteHandler}/>
        </div>
    );
};
