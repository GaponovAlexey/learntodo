import { useDispatch } from 'react-redux'
import { deletAction,  toggleStatus } from '../src/redux/reduser'

export const View = ({ title, id, completed, removeTodo }) => {
	
	const dispatch = useDispatch()
	return (
		<div>
			<h1 style={ { display: 'flex' } } >
				<input type={ "checkbox" } checked={ completed } onChange={ () => dispatch(toggleStatus(id)) } />
				<span>{ title }</span>
				<div onClick={ () => removeTodo(id) } style={ { color: 'red', fontSize: 16 } } >&times;</div>
			</h1>
		</div >
	)
}
