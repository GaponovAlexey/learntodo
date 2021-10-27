import { createSlice } from "@reduxjs/toolkit";

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
				counter: false
			})
		},
		removeTodow(state, action) {
			state.todos = state.todos.filter(e => e.id !== action.payload)
		}

	}
})

export const { addTodo, removeTodow } = todoSlice.actions

export default todoSlice.reducer