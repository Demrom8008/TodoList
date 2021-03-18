import React, {useEffect, useState} from 'react'
import TodoList from "./Todo/TodoList";
import Context from "./context";
import Loader from "./Loader";
import Modal from "./Modal/Modal";

const AddTodo = React.lazy(() => new Promise(resolve => {
    resolve(import('./Todo/AddTodo'))
}))

function App() {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos)
                    setLoading(false)
                }, 2000)
            })
    }, [])

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function onCreate(title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false
        }]))
    }

    return (
        <Context.Provider value={{removeTodo, toggleTodo, onCreate}}>
            <div className={'wrapper'}>
                <h1>Todo List</h1>
                <Modal/>
                <React.Suspense fallback={<p>loading...</p>}>
                    <AddTodo/>
                </React.Suspense>
                {loading && <Loader/>}
                {todos.length ? <TodoList todos={todos}/> : (
                    loading ? null : <p>Todo list is empty</p>
                )}
            </div>
        </Context.Provider>
    );
}

export default App;
