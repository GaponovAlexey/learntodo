
export const Newform = ({ value, updateText, addAction }) => {
	return (
		<label>
			<div style={ { display: 'flex' } } >
				<input value={ value } onChange={ (e) => updateText(e.target.value) } />
				<button onClick={() => addAction() }>send</button>
			</div>
		</label>
	)
}
