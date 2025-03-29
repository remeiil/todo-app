import { useState } from "react"

export function TodoCard(props) {
    const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo, handleEditTodo } = props
    const [editedInputValue, setEditedInputValue] = useState("")
    const [isEditing, setIsEditing] = useState(false)
    const [isExpanded, setIsExpanded] = useState(true)
    
    return (
        <div className="taskCard">
            <div className="taskHeader">
                <h4>{todo.input}</h4>
            </div>    
            <div className="taskMain">
                {(!isEditing  ? 
                    "" :
                    <>
                        <p>Edit task name: </p>
                        <input value={editedInputValue} onChange={(e) => {
                            setEditedInputValue(e.target.value)
                        }} placeholder={todo.input} onKeyDown={(ek) => {
                            if (ek.key === "Enter") {
                                handleEditTodo(todoIndex, editedInputValue)
                                setIsEditing(false)
                            }
                        }} />
                    </>
                )}
            </div>
            {(!isExpanded ?
                "" :
                <div className="taskExpandable">
                    <p>Estimated Duration:</p><p> <strong>{todo.taskDuration}</strong></p>
                    <p>Due Date:</p><p> <strong>{todo.taskDuedate}</strong></p>
                    <p>Category:</p><p> <strong>{todo.taskCategory}</strong></p>
                    <p>Recurs on:</p><p> <strong>{todo.taskRecurs}</strong></p>
                </div>
            )}
            
            <div className="taskFooter">
                <div> </div>
                {(!isExpanded ?
                    <button onClick={() => {
                        setIsExpanded(true)
                    }}>
                        <abbr title="Expand"><i className="fa-solid fa-plus"></i></abbr>
                    </button> :
                    <button onClick={() => {setIsExpanded(false)}}><abbr title="Collapse"><i className="fa-solid fa-minus"></i></abbr></button>
                )}
                {(todo.complete ? <><div> </div><div> </div></> :
                    !isEditing  ?  
                    <>
                        <button onClick={() => {
                            setIsEditing(true)
                        }}>
                            <abbr title="Edit task name"><i className="fa-regular fa-pen-to-square"></i></abbr>
                        </button> 
                        <div> </div>
                    </> :
                    <>
                        <button onClick={() => {
                            handleEditTodo(todoIndex, editedInputValue)
                            setIsEditing(false)
                        }} disabled={todo.complete}>
                            <abbr title="Save task name"><i className="fa-regular fa-floppy-disk"></i></abbr>
                        </button>
                        <button onClick={() => {
                            setIsEditing(false)
                        }} disabled={todo.complete}>
                            <abbr title="Exit editing without saving"><i className="fa-solid fa-door-open"></i></abbr>
                        </button>
                    </>
                )}
                {(todo.complete ? <div> </div> : 
                        <button onClick={() => {
                        handleCompleteTodo(todoIndex)
                    }} disabled={todo.complete}>
                        <abbr title="Mark Completed"><i className="fa-regular fa-square-check"></i></abbr>
                    </button>
                )}
                <button onClick={() => {
                    handleDeleteTodo(todoIndex)
                }}>
                    <abbr title="Delete Entirely"><i className="fa-regular fa-trash-can"></i></abbr>
                </button>
            </div>
        </div>
    )
    
}