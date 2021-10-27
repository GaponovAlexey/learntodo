import { configureStore } from "@reduxjs/toolkit";
import todoSlice  from "./reduser";

const sendStore =  configureStore({
	reducer: {
		todos: todoSlice,
	},
})
export default sendStore