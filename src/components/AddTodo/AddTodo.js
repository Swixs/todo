import { useState } from "react"
function AddTodo({todo, setTodo}) {

    const [value, setValue] = useState('');

    function saveTodo() {
        setTodo(
            [...todo,{
                id: 4,
                title: value,
                status: true
            }]
        )
    }

    return (
        <div>
            <input placeholder="input task" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={saveTodo}> Save</button>
        </div>
    )
}

export default AddTodo