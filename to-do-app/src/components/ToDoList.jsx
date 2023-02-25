import React, {Fragment} from 'react';
import Form from 'react-bootstrap/Form';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPenToSquare, faTrashCan, faSquarePlus, faXmark
} from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";
import { HexColorPicker } from "react-colorful";

const ToDoList = ({ toDo, setIsExpanded, markDone, setUpdateData, deleteTask, setIndex, date, type, setIsDeleted,blockPickerColor, urgent,longterm,normal,optional, currentColor, setCurrentColor, handleOnChange, taskStyle, handleOnClick, active, isExpanded}) => {

    return(
    <>
        {toDo.sort((a,b) => a.id > b.id ? 1 : -1) &&
    toDo.map( (task, index) => {
      //the to do list items with options to 
      return(

        <React.Fragment key={task.id}> 
        <>
<Form>
        <div>
          <Row>
            <Col className = "taskBg" style={{backgroundColor: task.background }}>
            {/* <Col className = "taskBg"> */}
            <div className = {task.status ? 'done' : ''}>
      {/* <HexColorPicker color={currentColor}onChange={updatedColor => handleOnChange(updatedColor)}/> */}

              <span className="taskNumber">{index+1}</span>
              <span className="taskText">{task.title}</span>
              <span className={isExpanded ? "hideTaskDate" : "taskDate"}>
              {task.dateSelect.toString().substring(0,10)}</span>
            </div>
            <div className="wrap">
              <span className = "green" onClick={ (e) => markDone(task.id)}>
                <FontAwesomeIcon icon={faCircleCheck}/>
              </span>
              {task.status ? null : (
                <span className = "yellow" onClick={ () => {setIsExpanded(); setIndex(index); setUpdateData({ id: task.id, title: task.title, status: task.status ? true : false, dateSelect: date, subtask: task.subtask });}}>
                <FontAwesomeIcon icon={faPenToSquare}/>
              </span>
              )}
              <span className = "red">
                <FontAwesomeIcon icon={faTrashCan} onClick={()=> {deleteTask(task.id);setIsExpanded()}}/>
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
          </Form>
        </>
        </React.Fragment>
      )
    })
    }
    </>
    )
}

export default ToDoList;