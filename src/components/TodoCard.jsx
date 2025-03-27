import { useState } from "react"

export function TodoCard(props) {
    const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo, handleEditTodo } = props
    const [editedInputValue, setEditedInputValue] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    
    return (
        <div className="taskCard">
            <div className="taskHeader">
                <p>{todo.input}</p>
            </div>    
            <div className="taskMain">
                {
                    (!isEditing  ? 
                        <button onClick={() => {
                            setIsEditing(true)
                        }}>
                            <abbr title="Edit task name"><i className="fa-regular fa-pen-to-square"></i></abbr>
                        </button> :
                        <>
                            <input value={editedInputValue} onChange={(e) => {
                                setEditedInputValue(e.target.value)
                            }} placeholder={todo.input} />
                            <button onClick={() => {
                                handleEditTodo(todoIndex, editedInputValue)
                                setIsEditing(false)
                            }} disabled={todo.complete}>
                                <abbr title="Save task name"><i className="fa-regular fa-floppy-disk"></i></abbr>
                            </button>
                        </>
                    )
                }
            </div>
            <div className="taskExpandable">
                <p>Estimated Duration:</p><p> {todo.taskDuration}</p>
            </div>
            <div className="taskFooter">
                <div class="categories">
                    <abbr title={"Category: " + todo.taskCategory}><p>{todo.taskCategory}</p></abbr>
                </div>
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