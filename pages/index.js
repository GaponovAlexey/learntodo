import { useState } from "react"

export default function Home() {
  const [todos, setTodo] = useState([])
  const [text, setText] = useState('')

  const addTodo = () => {
    if (text.trim().length) {
      setTodo([
        {
          id: Date.now().toString(),
          text,
          completed: false
        },
        ...todos,
      ])
      setText('')
    }
  }

  const removeid = (id) => {
    setTodo(todos.filter(e => e.id !== id))
  }

  const toggleTodo = (todoid) => {
    setTodo(
      todos.map(
        todo => {
          if (todo.id !== todoid) return todo
          return {
            completed: !todo.completed,
            ...todo,
          }
        })
    )
  }


  return (
    <div>
      <div>
        <input value={ text } onChange={ (e) => setText(e.target.value) } />
        <button onClick={ addTodo }>add todo</button>
      </div>
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
