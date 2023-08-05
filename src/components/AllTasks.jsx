import React from "react";
import Task from "./Task";
import './AllTasks.css'

// Parent component to render all tasks
function AllTasks(props) {

    if (!props.allTasks || props.allTasks.length === 0) {
        return (
            <div className="AllTasks">
            <h1>All Tasks</h1>
             <p>No tasks available.</p>
             </div>
             ); // Return a message when there are no tasks 
      }
    
    
  
    return (
      <div className="AllTasks">
        <h1>All Tasks </h1>
        {props.allTasks.map((task, index) => (
          <Task key={index} taskName={task} setTasks ={props.setTasks} index={index}/>
        ))}
      </div>
    );
        }

export default AllTasks;