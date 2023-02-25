import React, {useEffect} from 'react';
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
import {TwitterPicker} from 'react-color'
import "bootstrap/dist/css/bootstrap.min.css";
import ColorPicker from './ColorPicker.jsx'

const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate, index, setSubtasks, newSubtask, setNewSubtask, setIsExpanded, currentColor, setCurrentColor, currentColor2, setCurrentColor2 }) => {

    return(
        
  <Form.Group className="mb-3" controlId="formBasicEmail">
  {/* <TwitterPicker
        color={currentColor2}
        onChangeComplete={(color) => {
            setCurrentColor2(color.hex)
        }}
      /> */}
      <br></br>
      <Row> 
      <ColorPicker currentColor2={currentColor2} setCurrentColor2={setCurrentColor2}/>
      <br></br>
      <Col className="inputToDo">
        <Form.Control placeholder="Update task" 
          value={ updateData && updateData.title}
          onChange={ (e) => changeTask(e) } />
        <span> 
      <Button variant="primary" type="submit" onClick={() => updateTask(index)}>
        <span>
            <FontAwesomeIcon icon={faCircleCheck}/>
          </span>
      </Button></span>
      <Button variant="danger" onClick={cancelUpdate}>
          <span>
            <FontAwesomeIcon icon={faXmark}/>
          </span>
        </Button>
      </Col>
        </Row>
      </Form.Group>
    )
}

export default UpdateForm;