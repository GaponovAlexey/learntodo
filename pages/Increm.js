import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, Increment } from '../src/redux/reduser'

export const Increm = () => {
	const state = useSelector(state => state.todo.value)
	const dispatch = useDispatch()

	return (
		<div>
			{ state }
			<div style={ { padding: 10 } } >
				<buttom style={ { padding: 60 } }
					onClick={ () => dispatch(Increment()) }
				>plus</buttom>
				<br></br>
				<buttom
					onClick={ () => dispatch(decrement()) }
				>minus</buttom>
			</div>
		</div>
	)
}
