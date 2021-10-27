import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodow, completedType } from "../src/redux/reduser"

export default function Home() {
  const [text, setText] = useState('')
  const state = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()



  const send = () => {
    if (text.trim().length) {
      dispatch(addTodo(text))
    }
    setText('')
  }

  const removeTodo = (id) => {
    dispatch(removeTodow(id))
  }


  return (
    <div style={ { display: 'flex' } } >
      <div >
        <input value={ text } onChange={ (e) => setText(e.target.value) } />
        <button onClick={ send } >send</button>
        <div  >
          { state.map(e =>
            <div key={ e.id }>
              <h1 style={ { display: 'flex' } } >
                <input type={ "checkbox" } checked={ state.completed } onChange={() => dispatch(completedType(e.id))} />
                { e.text }
                <div style={ { color: 'red', fontSize: 16 } } onClick={ () => removeTodo(e.id) } >&times;</div>
              </h1>
            </div>
          ) }
        </div>
      </div>
    </div>
  )
}