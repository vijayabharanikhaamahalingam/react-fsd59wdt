import axios from "axios";
import { useLoaderData } from "react-router-dom";

import { useState } from "react";
import TodoItem from "./TodoItem";

// define a loader function
export const loader = async () => {
    // make an async call to fetch data
    const todos = await axios.get(`https://665eb6121e9017dc16f10996.mockapi.io/todos`);

    // return the data
    return {todos: todos.data };
}

const Todos = () => {

    // use the data using the useLoader hook
    const { todos: initialTodos } = useLoaderData();
    const [todos, setTodos] = useState(initialTodos);

    const handleUpdateTodo = (updatedTodo) => {
        setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    }

  return (
      <div>
        <h1>Todo List</h1>
        {
            todos.map(todo => (
                <TodoItem 
                    todo={todo}
                    key={todo.id}
                    onUpdateTodo={handleUpdateTodo}
                />
            ))
        }
    </div>
  )
}

export default Todos;