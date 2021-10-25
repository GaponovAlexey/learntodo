import { Increm } from "./Increm";
import { Todo } from "./Todo";

export default function Home() {


  return (
    <div style={ { display: 'flex', padding: 40 } } >
      <Todo />
      <Increm />
    </div>
  )
}
