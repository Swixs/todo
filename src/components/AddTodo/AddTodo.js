import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { Row, Col, Button, FormControl } from 'react-bootstrap';
import AddTodoClass from './AddTodo.module.css'

function AddTodo({ todo, setTodo }) {

    const [value, setValue] = useState('');

    function saveTodo() {
        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                status: true
            }]
        )
        setValue('')
    }

    return (
        <Row>
            <Col className={AddTodoClass.addTodoForm}>
                <FormControl placeholder="input task" value={value} onChange={(e) => setValue(e.target.value)} />
                <Button onClick={saveTodo} className={AddTodoClass.btn}> Save </ Button>
            </Col>
        </Row>
    )
}

export default AddTodo