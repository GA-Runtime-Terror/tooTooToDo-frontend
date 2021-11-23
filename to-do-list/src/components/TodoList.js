import React, {useState, useEffect} from "react";
import { getCurrentUser } from "../utils";
import TodoForm from "./TodoForm";
import { useNavigate } from 'react-router-dom'
import Welcome from "./Welcome";
import User from "./User";


function TodoList() {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

    const addTodo = todo => {
        if (!todo.text) {
            return;
        }
    

    const newTodos = [todo, ...todos]

    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
    console.log(todo,...todos);
    };

    const user = getCurrentUser()

    const navigation = useNavigate()

  useEffect(() => {
    if(!user) {
      navigation("/sign-in")
    }
  }, [user, navigation])

    return (
        <div>
            <Welcome />
            <User />
            <button onClick={() => {
                localStorage.removeItem('user')
                window.location.reload()
            }}>
                logout
            </button>
            <h1>Plan for today</h1>
            <p>
                {user?.userName}
            </p>
            
            <TodoForm onSubmit={addTodo}/>
            {todos.map(todo => {
                return <p key={todo.id}>{todo.text}</p>
            })}
        </div>
    )
}

export default TodoList