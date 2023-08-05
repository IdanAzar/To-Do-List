import React from "react";
import { useState } from "react";
import './Task.css'


function Task(props) {
    // creacting useState hook to remmber user checkboxing
    const [isChecked, setIsChecked] = useState(false);

    // delete task from to do list by index an use state
    const deleteHandeler = () => {
        props.setTasks((tasks) => {
           return tasks.filter((_, i) => i !== props.index);
        })
    }

    return (
            <label className="Task">
                <input type="checkbox"
                class="taskBox"
                defaultChecked={isChecked}
                onChange={() => setIsChecked(!isChecked)}/>
                <span>{props.taskName}</span>
                <button className="deleteButton" onClick={deleteHandeler}></button>
                
            </label>
    );
}

export default Task;