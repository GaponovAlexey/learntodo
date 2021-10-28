import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodow, completedType, fetchAction } from "../src/redux/reduser"

export default function Home() {
  const [todos, setText] = useState('')
  const state = useSelector(state => state.todos.todos)
  const { status, error } = useSelector(state => state.todos)
  const dispatch = useDispatch()


  const send = () => {
    if (todos.trim().length) {
      dispatch(addTodo(todos))
    }
    setText('')
  }

  const removeTodo = (id) => {
    dispatch(removeTodow(id))
  }
  useEffect(() => {
    dispatch(fetchAction())
  }, [dispatch])

  return (
    <div>

      { status === 'lodading' && <h2>Loading...</h2> }
      { error && <h2>Error...{ error }</h2> }
      <div style={ { display: 'flex' } } >
        <div >
          <input value={ todos } onChange={ (e) => setText(e.target.value) } />
          <button onClick={ send } >send</button>
          <div  >
            { state.map(e =>
              <div key={ e.id }>
                <h1 style={ { display: 'flex' } } >
                  <input type={ "checkbox" } checked={ state.completed } onChange={ () => dispatch(completedType(e.id)) } />
                  { e.title } 
                  <div style={ { color: 'red', fontSize: 16 } } onClick={ () => removeTodo(e.id) } >&times;</div>
                </h1>
              </div>
            ) }
          </div>
        </div>
      </div>
    </div>
  )
}