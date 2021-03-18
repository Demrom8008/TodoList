import React, {useState, useContext} from "react";
import Context from "../context";

const styles = {
    form: {
        marginBottom: '1rem'
    }
}

function useInputValue(defValue = '') {
    const [value, setValue] = useState(defValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo() {
    const input = useInputValue('')
    const {onCreate} = useContext(Context)

    function submitHandler(event) {
        event.preventDefault()
        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }
    return(
        <form style={styles.form} onSubmit={submitHandler}>
            <input {...input.bind}/>
            <input type={'submit'} value={'Add Todo'}/>
        </form>
    )
}

export default AddTodo;