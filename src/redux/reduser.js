import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchAction = createAsyncThunk(
	'todos/fetchAction',
	async function (_, { rejectWithValue }) {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
			if (!response) {
				throw new Error('server Error')
			}
			const data = await response.json()
			return data
		} catch (e) {
			return rejectWithValue(e.mesage)
		}
	}
)



export const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
		status: null,
		error: null,
	},

	reducers: {
		addTodo(state, action) {
			state.todos.push({
				id: Date.now().toString(),
				todos: action.payload,
				completed: false
			})
		},
		removeTodow(state, action) {
			state.todos = state.todos.filter(e => e.id !== action.payload)
		},
		completedType(state, action) {
			state.complet = state.todos.find(c => c.id === action.payload)
			state.complet = state.complet
		},
	},
	extraReducers: {
		[fetchAction.pending]: (state) => {
			state.status = 'loadingsss'
			state.error = null
		},
		[fetchAction.fulfilled]: (state, action) => {
			state.status = 'resolveds'
			state.todos = action.payload
		},
		[fetchAction.rejected]: (state, action) => {
			state.status = 'rejected'
			state.error = action.payload
		}
	}

})

export const { addTodo, removeTodow, completedType, } = todoSlice.actions

export default todoSlice.reducer