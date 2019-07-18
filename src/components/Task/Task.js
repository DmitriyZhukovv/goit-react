import React from 'react'



const Task = 
    ({
        id, 
        value, 
        onReturnAndDeleteItem, 
        onUpdatePriority,
        priority
    }) => (
        <div>
            <p>{value}</p>
            <button onClick = {onReturnAndDeleteItem}>delete</button>
            <select 
                value = {priority}
                name = "priority"
                onChange={e=> onUpdatePriority(id, e.target.value)}
                >
                    <option value = "LOW">low</option>
                    <option value = "NORMAL">norm</option>
                    <option value = "HIGT">higt</option>
            </select>
        </div>
)



export default Task;