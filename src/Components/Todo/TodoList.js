import React, { useReducer, useState } from 'react';
import { initialState, reducer } from './reducer';

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            dispatch({ type: 'add_todo', payload: inputValue });
            setInputValue(''); 
        }
    };

    const handleToggleTodo = (index) => {
        dispatch({ type: 'toggle_todo', payload: index });
    };

    const handleClearCompleted = () => {
        dispatch({ type: 'clear_completed' });
    };

    return (
        <div>
            <h1>Todo List</h1>

            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Add a new task"
            />

            <button onClick={handleAddTodo}>Add Todo</button>

            <ul>
                {state.todos.map((todo, index) => (
                <li
                    key={index}
                    onClick={() => handleToggleTodo(index)}
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                >
                    {todo.text}
                </li>
                ))}
            </ul>

            <button onClick={handleClearCompleted}>Clear Completed</button>
        </div>
    );
}

export default TodoList;
