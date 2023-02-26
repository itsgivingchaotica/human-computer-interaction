import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPenToSquare, faTrashCan, faSquarePlus, faXmark
} from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

// newTask, setNewTask, addTask are props
const AddSubtaskForm = ({ newSubtask, setNewSubtask, addSubtask, index, setSubtasks }) => {
    return(
        <>
    <Form.Group className="mb-3 shadow rounded" controlId="formBasicPassword">
    
      <Row>
      <Col className="inputToDo">
      <Form.Control placeholder="Add subtask !!" value={newSubtask} onChange={(e) => setNewSubtask( e.target.value)}/>
      <Button variant="success">
          <span>
                <FontAwesomeIcon icon={faSquarePlus} onClick={() => addSubtask(index)}/>
          </span>
        </Button>
      </Col>
      </Row>
    </Form.Group>
    </>
    )
}

export default AddSubtaskForm;