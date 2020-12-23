import React, {useRef} from "react";
import './new-todo.css';

import {futimes} from "fs"; // hooks - are special f() in React components

interface NewTodoProps {
    onAddingTodo: (text: string) => void;
}

// export as a const - F() expression
export const NewTodo: React.FC<NewTodoProps> = (props: any) => {
    const textInputRef = useRef<HTMLInputElement>(null); // null - default value

    function todoSubmitHandler(event: React.FormEvent) {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddingTodo(enteredText);
        textInputRef.current!.value = '';
    }

    // code before return executes first

    return (
        <form onSubmit={todoSubmitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text">ToDo Text</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">ADD TOD0</button>
        </form>
    );
};
