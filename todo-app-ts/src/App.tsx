import { useState } from "react"
import {Todos} from './components/todos'
const mocktodo = [{
    id: '1',
    title: 'Learn React',
    completed: false
},
{
    id: '2',
    title: 'Learn TypeScript',
    completed: false
},
{
    id: '3',
    title: 'Learn Redux',
    completed: false
},
{
    id: '4',
    title: 'Learn React Router',
    completed: false
},
{
    id: '5',
    title: 'Learn React Testing Library',
    completed: false
},
{
    id: '6',
    title: 'Learn React Hooks',
    completed: false
},
{
    id: '7',
    title: 'Learn React Context',
    completed: false
},
{
    id: '8',
    title: 'Learn React Hooks',
    completed: false
},
{
    id: '9',
    title: 'Learn React Hooks',
    completed: false
},
{
    id: '10',
    title: 'Learn React Hooks',
    completed: false
},
{
    id: '11',
    title: 'Learn React Hooks',
    completed: false
},
]

const App = () : JSX.Element => {
  const  [todos] = useState(mocktodo)
return (
<div className="todoapp">
    <Todos todos={todos}/>
</div>
)
  
}

export default App
