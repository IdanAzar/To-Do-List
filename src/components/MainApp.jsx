import React, { useState } from "react";
import AllTasks from './AllTasks'
import AddTask from './AddTask'
import './MainApp.css'

function MainApp() {

    /* use state hooks here  */
   // const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    return (
        <div className="mainDiv" > 
            <AddTask setTasks = {setTasks}/>
            <br/>
            <AllTasks allTasks={tasks} setTasks = {setTasks}/>
            
        </div>
    )
}

export default MainApp