import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodow } from "../src/redux/reduser"

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
        <div>
          { state.map(e => <h1 key={ e.id }>
            <div>{ e.text }</div>
            <button onClick={ () => removeTodo(e.id) } >del</button>
          </h1>) }

        </div>
      </div>
    </div>
  )
}