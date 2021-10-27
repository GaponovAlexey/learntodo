import { createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD

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
=======
import { Increm } from "../../pages/Increm";

export const todoReuser = createSlice({
	name: 'todo',
	initialState: {
		todo: [],
		value: 0
	},
	reducers: {
		addAction(state, actions) {
			state.todo.push({
				id: Date.now(),
				text: actions.payload
			})
		},
		removeActions(state, actions) {
			state.todo = state.todo.filter(e => e.id !== actions.payload)
		},
		Increment: state => {
			state.value += 1
		},
		decrement: (state) => {
			state.value -= 1
		}
	}
})

export const { addAction, removeActions, Increment, decrement } = todoReuser.actions

export default todoReuser.reducer
>>>>>>> 787f8272a2810a8b7e2e0aa1a828a6b6e3c400b4
