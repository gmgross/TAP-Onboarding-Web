import React , {useEffect, useState} from "react"
import logo from './logo.svg';
import './App.css';
import Signup from "./components/Signup";

function App() {
 /* const url = "https://jsonplaceholder.typicode.com/todos"
  //HOOK QUE ALMACENA
  const [todos, setTodos] = useState()
  //FUNCION QUE PIDE
   const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON)
  }
  //HOOK USE EFFECT
  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className="App">
      TAP ONBOARDING
      <ul>
      { !todos ? "Cargando..." :
       todos.map((todo, index)=> {
        return <li key={index}>{todo.title} {todo.completed ? "✔" : "❌"}</li>
      })}
      </ul>
    </div> */
    return(
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;
