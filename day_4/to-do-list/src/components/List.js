import React from 'react';
import Task from "./Task";
import '../styles/App.css'

function List() 
{
    return (
        <div>
            <div className="task" id="newTask">
                <input type="text" id="newTitle" placeholder="New Task Title" />
                <input type="text" id="newContent" placeholder="New Task Content" />
                <button>Create</button>
            </div>
            
            <Task title="Task 1" content="This is the content of the task" status="complete" />
            <Task title="Task 2" content="This is the content of the task" status="new" />
            <Task title="Task 3" content="This is the content of the task" status="new" />
        </div>
    );
}

export default List;
