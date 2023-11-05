function TodoList({ todo, setTodo }) {

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id);
        setTodo(newTodo)
    }

    function statusTodo(id){
        let newTodo = [...todo].filter(item => {
            if(item.id === id){
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }
    return (
        <div>
            {
                todo.map(item => (
                    <div key={item.id}>
                        <div> {item.title} </div>
                        <button onClick={() => deleteTodo(item.id)}> Delete </button>
                        <button onClick={() => statusTodo(item.id)}> open/cancel </button>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList