import { useState } from "react"

export function TodoCard(props) {
    const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo, handleEditTodo } = props
    const [editedInputValue, setEditedInputValue] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
    
    return (
        <div className="taskCard">
            <div className="taskHeader">
                <h4>{todo.input}</h4>
            </div>    
            <div className="taskMain">
                {
                    (!isEditing  ? 
                        "" :
                        <>
                            <p>Edit task name: </p>
                            <input value={editedInputValue} onChange={(e) => {
                                setEditedInputValue(e.target.value)
                            }} placeholder={todo.input} />
                        </>
                    )
                }
            </div>
            {
                (!isExpanded ?
                    "" :
                    <div className="taskExpandable">
                        <p>Estimated Duration:</p><p> <strong>{todo.taskDuration}</strong></p>
                        <p>Due Date:</p><p> <strong>{todo.taskDuedate}</strong></p>
                    </div>
                )
            }
            
            <div className="taskFooter">
                <div className="categories">
                    <abbr title={"Category: " + todo.taskCategory}><p>{todo.taskCategory}</p></abbr>
                </div>
                {
                    (!isExpanded ?
                        <button onClick={() => {
                            setIsExpanded(true)
                        }}>
                            <abbr title="Expand"><i className="fa-solid fa-plus"></i></abbr>
                        </button> :
                        <button onClick={() => {setIsExpanded(false)}}><abbr title="Collapse"><i className="fa-solid fa-minus"></i></abbr></button>
                    )
                }
                {
                    (!isEditing  ?  
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
                    )
                }
                <button onClick={() => {
                    handleCompleteTodo(todoIndex)
                }} disabled={todo.complete}>
                    <abbr title="Mark Completed"><i className="fa-regular fa-square-check"></i></abbr>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(todoIndex)
                }}>
                    <abbr title="Delete Entirely"><i className="fa-regular fa-trash-can"></i></abbr>
                </button>
            </div>
        </div>
    )
    
}