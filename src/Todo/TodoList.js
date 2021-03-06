import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: 'none',
        padding: '0',
        margin: '0'
    }
}

function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {props.todos.map((todo, index) => {
                return <TodoItem todo={todo} index={index} key={todo.id}/>
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList;