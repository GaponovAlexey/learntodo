<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import todoSlice  from "./reduser";

const sendStore =  configureStore({
	reducer: {
		todos: todoSlice,
	},
})
export default sendStore
=======
import { configureStore } from '@reduxjs/toolkit'
import todoReuser  from './reduser'

const store = configureStore({
	reducer: {
		todo: todoReuser,
	},
})

export default store
>>>>>>> 787f8272a2810a8b7e2e0aa1a828a6b6e3c400b4
