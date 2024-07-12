

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
                index === action.payload ? { ...todo, completed: !todo.completed } : todo),
            };
        case 'clear_completed':
            return { ...state, todos: state.todos.filter(todo => !todo.completed) };
        default:
            return state;
    }
}

export { initialState, reducer };
  