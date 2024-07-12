import React, { useReducer, useState } from 'react';

const initialState = {
    todos: [],
};
  
function reducer(state, action) {
    switch (action.type) {
        case 'add_todo':
        return { ...state, todos: [...state.todos, { text: action.payload, completed: false }] };
        case 'toggle_todo':
        return {
            ...state,
            todos: state.todos.map((todo, index) =>
            index === action.payload ? { ...todo, completed: !todo.completed } : todo
            ),
        };
        case 'clear_completed':
        return { ...state, todos: state.todos.filter(todo => !todo.completed) };
        default:
        return state;
    }
}

const TodoList = () => {
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