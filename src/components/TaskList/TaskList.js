import React from 'react'
import Task from '../Task/Task'


const TaskList =({tasks, onDeleteItem, onUpdatePriority}) =>(
    <ul className = {styleMedia.conteiner}>
        {tasks.map( elem => (
            <li /* className ={style.innerItem} */ key= {elem.id}>
                <Task {...elem}  />
            </li>))}

    </ul>)

    




export default TaskList;