import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, addAction, togleAction, fetchAction, deletAction } from "../src/redux/reduser"
import { Newform } from "./Newform"
import { TodoList } from "./TodoList"

export default function Home() {
  const [text, setText] = useState('')
  const { status, error } = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const send = () => {
    console.log('da');
    if (text.trim().length) {
      dispatch(addAction(text))
      setText('')
    }
  }

  const removeTodo = (id) => {
    dispatch(deletAction(id))
  }
  useEffect(() => {
    dispatch(fetchAction())
  }, [dispatch, togleAction])

  return (
    <div>
      <Newform value={ text } updateText={ setText } addAction={ send } />
      <TodoList removeTodo={ removeTodo } />
      {/*<View state={ state } deletAction={ deletAction } status={ status } error={ error } send={ send } removeTodo={ removeTodo } />*/ }
      { status === 'lodading' && <h2>Loading...</h2> }
      { error && <h2>Error...{ error }</h2> }
    </div>
  )
}