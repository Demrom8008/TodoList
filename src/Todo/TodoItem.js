import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from "../context";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({todo, index}) {
    const {removeTodo, toggleTodo} = useContext(Context)
    const classes = []

    if (todo.completed === true) {
        classes.push('completed')
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input style={styles.input} type={'checkbox'} onChange={() => toggleTodo(todo.id)}
                       checked={todo.completed}/>
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button className={'closed'} onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem;