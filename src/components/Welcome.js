import React from "react";
// import Home from "./Home";
import { useState } from "react";
import '../../src/components/welcome.css'
const Welcome = () => {
  // let [name, setName] = useState("Sathish");
  // const editName = () => {
  //   setName("Sai");
  // };
  
  let [taskInput, updateTaskInput] = useState("");
  let [taskDetails, updateTaskDetails] = useState([
    { id: 1, task: "Learn React" },
    { id: 2, task: "Practice React" },
    { id: 3, task: "Do Workout" },
    { id: 4, task: "Do Meditation" },
  ]);
  let [nextId,updateId] = useState(4)
  
 
  function addNewTask() {
    updateId(nextId+1)
    console.log(nextId)
    if (taskInput === "") {
      alert("Add some tasks");
    } else {
      let newTask = [...taskDetails, { id:nextId, task:taskInput }];
      updateTaskDetails(newTask);
      
      updateTaskInput("")
     
    }
  }
  function deleteTask(id){
    
    let updatedTask=taskDetails.filter((todo)=>{
      return todo.id!==id;
    })
    updateTaskDetails(updatedTask)

  }
  return (
    <div>
      <h1>Welcome to Home Section </h1>
      <h2>Todo App Using React</h2>
      {/* <h1>Hello {name}</h1>
      <button onClick={editName}>Change name</button>

      <Home name={name} /> */}
      <div className="container w-50 mt-4 ">
        <div className="input-group ">
          <input
            className="form-control"
            type="text"
            value={taskInput}
            onChange={(e) => {
              let task = e.target.value;
              updateTaskInput(task);
              
              
            }}
          ></input>
          <button className="btn btn-primary" onClick={() => addNewTask()}>
            Add Task
          </button>
        </div>
        <ul className="list-group mt-3">
          {taskDetails.map((todo) => {
            return (
              <li className="list-group-item d-flex flex-row justify-content-between align-content-center">
                <p>{todo.task}</p>
                <button className="btn" onClick={()=>{deleteTask(todo.id)}}>Delete</button>
              </li>
            );
           
          })}

        </ul>
        {taskDetails.length >0 ? (
        <button className="btn btn-primary mt-5 saveButton">Save</button>
      ) : (
        <p>No data available to save</p>
      )}
             
      </div>
    </div>
  );
};

export default Welcome;
