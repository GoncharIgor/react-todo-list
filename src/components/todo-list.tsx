import React from "react";
import {ToDo} from "../models/todo.model";
import './todo-list.css';

//every react component has property: children

type TodoListProps1 = {
    items: { id: string, text: string }[];
    onTodoDelete: (id: string) => void;
}

interface TodoListProps {
    // items: { id: string, text: string }[];
    items: ToDo[];
    onTodoDelete: (id: string) => void;
}

// export as a F()
export function TodoList(props: TodoListProps) {

    return (
        <ul>
            {props.items.map((todo: any) => <li key={todo.id}><span>{todo.text}</span>
                <button onClick={props.onTodoDelete.bind(null, todo.id)}>DELETE</button>
            </li>)}
        </ul>
    )
};
