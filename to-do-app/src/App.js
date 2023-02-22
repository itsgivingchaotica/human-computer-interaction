import React, {useState,useCallback} from 'react';
import AddTaskForm from './components/AddTaskForm.jsx';
import UpdateForm from './components/UpdateForm.jsx';
import ToDoList from './components/ToDoList.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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

//color by category
//categorize by importance, or pin important tasks
//task subcategories
//autofocus into form and = submit in addition to add button
//

function App() {

  //tasks state, to populate to do list, an array
  const [toDo, setToDo] = useState([]);

  // temp States
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  const useToggle = (initialState=false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState(state=>!state),[]);
      return [state,toggle];
  }

  const [isExpanded, setIsExpanded] = useToggle();

  // add task
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry])
      //clear temp state
      setNewTask('');
    }
  }

  // delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter( toDo => toDo.id !==id )
    setToDo(newTasks);
  }

  // mark task completed
  const markDone = (id) => {
    let newTask = toDo.map ( task => {
      if(task.id===id){
        //toggle status, cross out if toggled to true(task completed)
        return ({...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }

  // Cancel update

  const cancelUpdate = () => {
    setUpdateData('');
  }

  // change task for update
 const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  // update task
  const updateTask = () => {
    //filter the to do list for - leaving in those that od not match the updatedata id
    let filteredList = [...toDo].filter( task => task.id !== updateData.id);
    //add in the updated data to the to do list
    let updatedObject = [...filteredList, updateData];
    setToDo(updatedObject);
    //clear update state
    setUpdateData(''); 
  }

  const [index,setIndex] = useState('');

  return (
    
    <div className="container App">
    <br /><br />
    <h2>To Do List App (ReactJS)</h2>
    <br /><br />

    <Form> 
      {updateData && updateData ? (
        <UpdateForm updateData={updateData} changeTask={changeTask} updateTask={updateTask} cancelUpdate={cancelUpdate}/>
      ) : (
        <AddTaskForm newTask={newTask} setNewTask={setNewTask} addTask={addTask}/>
      )}
    </Form>

    {/* Display ToDos*/}
    <Container>
    {toDo && toDo.length ? '' : 'No Tasks...'} 
    <Row>
    <Col>
      <ToDoList toDo={toDo} setIsExpanded={setIsExpanded} isExpanded={isExpanded} markDone={markDone} setUpdateData={setUpdateData} deleteTask={deleteTask} setIndex={setIndex}/>
      {/* <Form.Control placeholder="Finalize Task" value={newTask} onChange={(e) => setNewTask( e.target.value)}/> */}
    </Col>
    {!isExpanded ? null : (
      <Col>
      <Container className="background">
        <Row> 
          <Col className="sidebar">Hello,{index}
          </Col>
        </Row>
      </Container>
    </Col>
    )}
    </Row>
    </Container>
    </div>
  );
}

export default App;
