import React, {useState,useCallback} from 'react';
import AddTaskForm from './components/AddTaskForm.jsx';
import AddSubtaskForm from './components/AddSubtaskForm.jsx';
import Subtask from "./components/Subtask.js";
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
import {TwitterPicker} from 'react-color'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
  const [newSubtask, setNewSubtask] = useState('');
  const [updateData, setUpdateData] = useState('');
  const [index,setIndex] = useState('');
  const [date,setDate] = useState(new Date());
  const [type, setType] = useState('');
  // const [currentColor, setCurrentColor] = useState("");

  const [currentColor, setCurrentColor] = useState("#fff");
  
  const handleOnClick = () => {
    setActive()
  }

  const useToggle = (initialState=false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState(state=>!state),[]);
      return [state,toggle];
  }

  const [isExpanded, setIsExpanded] = useToggle();
  const [isListed, setIsListed] = useToggle();
  const [active,setActive] = useToggle();
  const [currentColor2, setCurrentColor2] = useState("fff");

  // const [normal, setNormal] = useState(false);
  // const [urgent, setUrgent] = useState(false);
  // const [longterm, setLongterm] = useState(false);
  // const [optional, setOptional] = useState(false);
  // const [isGroup,setGroup] = useState([]);
  // const handleSelect = (e) => {
  //       if (e.target.value==="Normal")
  //            setType("normal");
  //       else if (e.target.value==="Urgent!")
  //            setType("urgent");
  //       else if (e.target.value==="Long-term goal")
  //            setType("longterm");
  //       else if (e.target.value==="Optional")
  //            setType("optional");
  //   }
  // const [newSubtask, setNewSubtask] = useState(Array.from({length: n},()=> Array.from({length: n}, () => null)));

  // const handleChange = (row, column, event) => {
  //   let subtaskList = [...newSubtask];
  //   subtaskList[row][column] = +event.target.value;
  //   setNewSubtask(subtask);
  // }

  //their setTasks is our setToDo
  
  const handleOnChange = (color) => {
    console.log(color);
    setCurrentColor(color.hex);
  }

  const addSubtask = (taskIndex) => {
    // var size = Object.keys(myObj).length;
    let num = Object.keys(toDo[taskIndex].subtask).length+1;
    let sublist = {
          id: num,
          subtaskTitle: newSubtask,
          status: false
        };
        const taskListCopy = [...toDo];
        taskListCopy[taskIndex].subtask.push(sublist);
        setToDo(taskListCopy);
        setNewSubtask('');
  } //must implement this in addtask form

  // add task
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false, dateSelect: date, priorityType: type, background: `${currentColor}`, subtask: []};
      console.log(newEntry);
      setToDo([...toDo, newEntry]);
      //clear temp state
      setNewTask('');
      setCurrentColor("#fff");
      setDate(new Date());
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
 const changeTask = (e,toDo,index) => {
  // if (currentColor2==="#fff"){
  //   setCurrentColor2("pink");
  // }
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
      dateSelect: date, 
      priorityType: type,
      // background: `${currentColor}`,
      background: `${currentColor2}`,
      subtask: []
    }
    setUpdateData(newEntry);
    setCurrentColor("#fff");
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
    setIsExpanded(); 
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      // event.preventDefault();
      // 👇 Get input value
      addSubtask(index);
    }
  };

  return (
    
    <div className="container App">
    <br /><br />
    <h2>To Do List App (ReactJS)</h2>
    <br /><br />

    {/* <Form> 
      {updateData && updateData ? (
        <UpdateForm updateData={updateData} changeTask={changeTask} updateTask={updateTask} cancelUpdate={cancelUpdate}/>
      ) : (
        <AddTaskForm newTask={newTask} setNewTask={setNewTask} addTask={addTask}/>
      )}
    </Form> */}
    <Form>
    
      <AddTaskForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} date={date} setDate={setDate} type={type} setType={setType} handleOnClick={handleOnClick} currentColor={currentColor} setCurrentColor={setCurrentColor} isExpanded={isExpanded}/>
    </Form>

    {/* Display ToDos*/}
    <Container>
    {toDo && toDo.length ? '' : 'No Tasks...'} 
    <Row>
    <Col>
      <ToDoList toDo={toDo} setIsExpanded={setIsExpanded} isExpanded={isExpanded} markDone={markDone} setUpdateData={setUpdateData} deleteTask={deleteTask} setIndex={setIndex} setIsListed={setIsListed} date={date} type={type} currentColor={currentColor} setCurrentColor={setCurrentColor} handleOnChange={handleOnChange} handleOnClick={handleOnClick} active={active}/>
      {/* <Form.Control placeholder="Finalize Task" value={newTask} onChange={(e) => setNewTask( e.target.value)}/> */}
    </Col>
    {!isExpanded ? null : (
      <Col>
      <Container className="background">
        <Row> 
          <Col className="sidebar">
          <UpdateForm toDo={toDo} updateData={updateData} changeTask={changeTask} updateTask={updateTask} cancelUpdate={cancelUpdate} setIsExpanded={setIsExpanded} index={index} setCurrentColor2={setCurrentColor2} currentColor2={currentColor2}/>
          {/* <TwitterPicker
        color={currentColor2}
        onChangeComplete={(color) => {
            setCurrentColor2(color.hex)
        }}
      /> */}
          <Form>
          
            <AddSubtaskForm newSubtask={newSubtask} setNewSubtask={setNewSubtask} addSubtask={addSubtask} index={index} handleKeyDown={handleKeyDown}/>
            {/* instead of adding task, we had subtask */}
          </Form>
          {/* <ToDoList toDo={toDo} setIsExpanded={setIsExpanded} isExpanded={isExpanded} markDone={markDone} setUpdateData={setUpdateData} deleteTask={deleteTask} setIndex={setIndex}/> */}
          {/* Hello */}
          {/* <SubtaskList toDo={toDo} index={index} setNewSubtask={setNewSubtask} addSubtask={addSubtask} newSubtask={newSubtask}/> */}
          {toDo[index].subtask.map((e, i) => { return ( //i added [index] to toDo to specify the index of the toDo component that the user clicks on

    <div background-color="red">
    <Subtask
      key={e.id}
      subIndex={i}
      subtask={e}
      setNewSubtask={setNewSubtask}
      addSubtask={addSubtask}
      newSubtask={newSubtask}
      toDoIndex={index}//here i need to find a way to add the toDo index
    />
    </div>
  )})
    }
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
