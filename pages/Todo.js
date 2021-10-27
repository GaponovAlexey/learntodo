import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAction, removeActions } from '../src/redux/reduser'

export const Todo = () => {
	const state = useSelector(state => state.todo.todo)
	const [text, setText] = useState('')


	const dispatch = useDispatch()

	const addSend = (text) => {
		if (text.trim().length) {
			dispatch(addAction(text))
			setText('')
		}
	}
	const remove = (id) => {
		dispatch(removeActions(id))
	}



	return (
		<div >
			<input value={ text } onChange={ (e) => setText(e.target.value) } />
			<div >

				<div>
					<button onClick={ () => addSend(text) } >send</button>
				</div>
				<br></br>
				<div>
					{ state.map(e => <div key={ e.id }>
						<div style={ { display: 'flex' } }>
							<h1>{ e.text }</h1>
							<div style={ { color: 'red' } }
								onClick={ () => remove(e.id) }
							>&times;</div>
						</div>
					</div>) }
				</div>
			</div>
		</div>
	)
}
