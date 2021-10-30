import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchAction = createAsyncThunk(
	'todos/fetchAction',
	async function (_, { rejectWithValue }) {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
			if (!response) {
				throw new Error('server Error')
			}
			const data = await response.json()
			return data
		} catch (e) {
			return rejectWithValue(e.message)
		}
	}
)

export const deletAction = createAsyncThunk(
	'todos/deletAction',
	async function (id, { rejectWithValue, dispatch }) {
		try {
			const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
				method: 'DELETE'
			})
			console.log(response);
			if (!response.ok) {
				throw new Error('not delet help me Error')
			}
			dispatch(removeTodow(id))
		} catch { e } {
			return rejectWithValue(e.message)
		}
	}
)

export const toggleStatus = createAsyncThunk(
	'todo/toggleStatus',
	async function (id, { rejectWithValue, dispatch, getState }) {
		const todo = getState().todos.todos.find(todo = todo.id === id)
		console.log(todo);
		try {
			const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
				method: 'PATCH',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify({
					completed: !todo.completed
				})
			})
			if (!response.ok) {
				throw new Error('error toogle')
			}
			dispatch(completedType(id))
			console.log(data);
		} catch (e) {
			return rejectWithValue(e.message)
		}
	}
)

export const addAction = createAsyncThunk(
	'todo/addAction',
	async function (text, { rejectWithValue, dispatch }) {
		try {
			const todo = {
				title: text,
				userId: 1,
				completed: true
			}
			const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify(todo)
			})

			if (!response.ok) {
				throw new Error('add error')
			}
			const data = await response.json()
			console.log(data);
			dispatch(addTodo(data))

		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)


const setError = (state, action) => {
	state.status = 'rejected'
	state.error = action.payload
}

export const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
		status: null,
		error: null,
	},
	reducers: {
		addTodo(state, action) {
			state.todos.push(action.payload)
		},
		removeTodow(state, action) {
			state.todos = state.todos.filter(e => e.id !== action.payload)
		},
		completedType(state, action) {
			const togleTodo = state.todos.find(c => c.id === action.payload)
			togleTodo.completed = !togleTodo.completed
		},
	},
	extraReducers: {
		[fetchAction.pending]: (state) => {
			state.status = 'lodading'
			state.error = null
		},
		[fetchAction.fulfilled]: (state, action) => {
			state.status = 'resolved'
			state.todos = action.payload
		},
		[fetchAction.rejected]: setError,
		[deletAction.rejected]: setError,
		[toggleStatus.rejected]: setError,
	},
})

const { addTodo, removeTodow, completedType, } = todoSlice.actions

export default todoSlice.reducer