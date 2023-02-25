import React from 'react';
import '../App.css';
import Subtask from "./Subtask.js";

const SubtaskList = ({toDo, index, setNewSubtask, addSubtask, newSubtask}) => {(toDo[index].subtask.map((e, i) => ( //i added [index] to toDo to specify the index of the toDo component that the user clicks on

    <div background-color="red">
    hello
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
  ))
  )
    console.log(index);
    console.log(toDo[index]);

}; //this has to be in my toDoList form

  export default SubtaskList;