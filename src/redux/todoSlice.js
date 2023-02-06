import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk(
    "todos/getTodosAsync",
    async () => {
        const response = await fetch('http://localhost:3000/todo');

        if (response.ok) {
            const todos = await response.json();
            return { todos };
        }
    }
)

export const addTodoAsync = createAsyncThunk(
    "todos/addTodoAsync",
    async (todo) => {
        const response = await fetch('http://localhost:3000/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        });
        
        if (response.ok) {
            const newTodo = await response.json();
            return { newTodo };
        }
    }
)

export const deleteTodoAsync = createAsyncThunk(
    "todos/deleteTodoAsync",
    async (id) => {
        const response = await fetch(`http://localhost:3000/todo/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            return { id };
        }
    }
)

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        fetchInProgress: false,
    }
    ,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            return state.todos.filter((todo) => todo.id !== action.payload.id);
        },
        toggleComplete: (state, action) => {
			const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
			state.todos[index].isDone = action.payload.isDone;
        }
    },
    extraReducers: {
        [getTodosAsync.fulfilled]: (state, action) => {
            return {
                ...state,
                todos: action.payload.todos.data,
                fetchInProgress: false,
            }
        },
        [getTodosAsync.pending]: (state, action) => {
            return {
                ...state,
                fetchInProgress: true,
            }
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            return {
                ...state,
                todos: state.todos.concat(action.payload.newTodo.data),
            }
        },
        [deleteTodoAsync.fulfilled]: (state, action) => {
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id),
            }
        }
    }

});

export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;