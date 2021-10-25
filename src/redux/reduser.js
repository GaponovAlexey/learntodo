import { createSlice } from "@reduxjs/toolkit";
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