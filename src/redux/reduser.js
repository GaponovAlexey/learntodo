import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: []
	},

	reducers: {
		addTodo(state, action) {
			state.todos.push({
				id: Date.now().toString(),
				text: action.payload,
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

	}
})

export const { addTodo, removeTodow, completedType } = todoSlice.actions

export default todoSlice.reducer