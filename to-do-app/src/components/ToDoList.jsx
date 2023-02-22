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

const ToDoList = ({ toDo, setIsExpanded, isExpanded, markDone, setUpdateData, deleteTask, setIndex}) => {
    return(
    <>
        {toDo.sort((a,b) => a.id > b.id ? 1 : -1) &&
    toDo.map( (task, index) => {
      //the to do list items with options to 
      return(
        <React.Fragment key={task.id}> 
        <>
        <div onClick={() => {setIsExpanded(); setIndex(task.id);}}>
          <Row>
            <Col className = "taskBg">
            <div className = {task.status ? 'done' : ''}>
              <span className="taskNumber">{index+1}</span>
              <span className="taskText">{task.title}</span>
            </div>
            <div className="wrap">
              <span className = "green" onClick={ (e) => markDone(task.id)}>
                <FontAwesomeIcon icon={faCircleCheck}/>
              </span>
              {task.status ? null : (
                <span className = "yellow" onClick={ () => setUpdateData({ id: task.id, title: task.title, status: task.status ? true : false })}>
                <FontAwesomeIcon icon={faPenToSquare}/>
              </span>
              )}
              <span className = "red">
                <FontAwesomeIcon icon={faTrashCan} onClick={()=> deleteTask(task.id)}/>
              </span>
            </div>
            </Col>
            {/* {!isExpanded ? null : (
             <Col> 
                <div>
                Hello
                </div>
              </Col>
            )} */}
             {/* {task.status ? null : (
                <span className = "yellow" onClick={ () => setUpdateData({ id: task.id, title: task.title, status: task.status ? true : false })}>
                <FontAwesomeIcon icon={faPenToSquare}/>
              </span>
              )} */}
          </Row>
          </div>
        </>
        </React.Fragment>
      )
    })
    }
    </>
    )
}

export default ToDoList;