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

const Subtask = ({
  subtask,
  subIndex,
  addSubtask,
  newSubtask,
  toDoIndex,
  toDo,
  setToDo, 
  setNewSubtask,
  markDone, 
  setUpdateData,
  deleteTask,
  deleteSubtasks,
}) => {
  // const [subtaskTitle, setSubtaskTitle] = useState(subtask.subtaskTitle)
  return (
    <>
      <React.Fragment key={subtask.id}> 
        <>
        <div>
          <Row>
            <Col className = "taskBg">
            <div className = {subtask.status ? 'done' : ''}>
              <span className="taskNumber">{subIndex+1}</span>
              <span className="taskText">{subtask.subtaskTitle}</span>
            </div>
            <div className="wrap">
              <span className = "red">
                <FontAwesomeIcon icon={faTrashCan} onClick={()=> deleteSubtasks(subIndex,toDoIndex)}/>
              </span>
            </div>
            </Col>
          </Row>
          </div>
        </>
        </React.Fragment>
    </>
  );
};

export default Subtask;
