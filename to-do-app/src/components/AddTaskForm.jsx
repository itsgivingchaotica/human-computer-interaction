import React, {useState,useCallback} from 'react';
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {TwitterPicker} from 'react-color';

// newTask, setNewTask, addTask are props
const AddTaskForm = ({ newTask, setNewTask, addTask, date, type, setType, format, inputFormat, mode, startOfWeek, availableDates, minimalDate, setDate, handleSelect, blockPickerColor, setBlockPickerColor, handleOnClick, currentColor, setCurrentColor, handleOnChange, isExpanded }) => {

    return(
        <>
    <Form.Group className="mb-3 rounded" controlId="formBasicPassword">
      <Row >
      <Col className="inputToDo">
      
      <Form.Control placeholder="Add task, queen :)" value={newTask} onChange={(e) => setNewTask( e.target.value)}/>
      {/* <Form.Control placeholder="input color ;)" value={currentColor} onChange={(e) => setCurrentColor( e.target.value)}/> */}
      <Button variant="success">
          <span>
                <FontAwesomeIcon icon={faSquarePlus} onClick={addTask}/>
          </span>
        </Button>
        <DatePicker 
      selected={date} 
      dateFormat="MMMM d, yyyy"
      onChange={date => setDate(date)}   
      />
      </Col>
      </Row>
      {isExpanded ? null : (   
        <TwitterPicker
        color={currentColor}
        onChangeComplete={(color) => {
            setCurrentColor(color.hex)
        }}
      />
      )}
    </Form.Group>
    </>
    )
}

export default AddTaskForm;