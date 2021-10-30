import React from 'react'
import { useSelector } from 'react-redux'
import { View } from './View'

export const TodoList = ({ removeTodo }) => {
	const todos = useSelector(state => state.todos.todos)

	return (
		<div>
			{ todos.map(e => <View key={ e.id } { ...e } removeTodo={ removeTodo } />) }
		</div>
	)
}
