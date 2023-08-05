import React from "react";
import { useState } from "react";
import './AddTask.css'


function AddTask(props) {
    const [input, setInput] = useState(''); // '' is the initial state value

    const handleAddTask = () => {
        if (input.trim() !== "") { // checks if input isnt empty
            props.setTasks((tasks) => [...tasks, input]);
            setInput(""); // Reset the input after adding the task
        }
    }
    return (
        <div className="addTask">
        <h1>Add Task</h1>
        <input type="text" id="fname" name="fname" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button className="addButtonTask" type="button" onClick={handleAddTask}> add </button>
        </div>
    );
}

export default AddTask;