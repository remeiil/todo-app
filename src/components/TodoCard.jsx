import { useState } from "react"

export function TodoCard(props) {
    const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo, handleEditTodo } = props
    const [editedInputValue, setEditedInputValue] = useState('')
    
    return (
        <div className="taskCard">
            <div className="taskHeader">
                <p>{todo.input}</p>
            </div>    
            <div className="taskMain">
                <p>Edit: </p>
                <input value={editedInputValue} onChange={(e) => {
                    setEditedInputValue(e.target.value)
                }} placeholder={todo.input} />
                <button onClick={() => {
                    handleEditTodo(todoIndex, editedInputValue)
                }} disabled={todo.complete}>
                    <i className="fa-regular fa-pen-to-square"></i>
                </button>
            </div>
            <div className="taskExpandable">
                <p>Estimated Duration:</p><p> {todo.taskDuration}</p>
            </div>
            <div className="taskFooter">
                <div class="categories">
                    <p>{todo.taskCategory}</p>
                </div>
                <button onClick={() => {
                    handleCompleteTodo(todoIndex)
                }} disabled={todo.complete}>
                    <i className="fa-regular fa-square-check"></i>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(todoIndex)
                }}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </div>
    )
    
}