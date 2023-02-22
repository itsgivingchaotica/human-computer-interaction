import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPenToSquare, faTrashCan, faSquarePlus, faXmark
} from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

// newTask, setNewTask, addTask are props
const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
    return(
        <>
    <Form.Group className="mb-3 shadow rounded" controlId="formBasicPassword">
      <Row >
      <Col className="inputToDo">
      <Form.Control placeholder="Finalize Task" value={newTask} onChange={(e) => setNewTask( e.target.value)}/>
      <Button variant="success">
          <span>
                <FontAwesomeIcon icon={faSquarePlus} onClick={addTask}/>
          </span>
        </Button>
      </Col>
      </Row>
    </Form.Group>
    </>
    )
}

export default AddTaskForm;