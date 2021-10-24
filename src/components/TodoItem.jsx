import React from 'react'

export const TodoItem = ({ id, text, completed }) => {
	return (
		<div>
			<ul>
				{
					todos.map(todo => <h1 key={ todo.id }>
						<input type='checkbox' checked={ todo.completed } onChange={ () => toggleTodo(todo.id) } />
						<span> { todo.text }</span>
						<span
							onClick={ () => removeid(todo.id) }
							style={ { color: 'red' } } >&times;</span>
					</h1>)
				}
			</ul>
		</div>
	)
}
