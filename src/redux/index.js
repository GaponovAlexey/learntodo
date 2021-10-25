import { configureStore } from '@reduxjs/toolkit'
import todoReuser  from './reduser'

const store = configureStore({
	reducer: {
		todo: todoReuser,
	},
})

export default store