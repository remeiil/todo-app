import { useState } from "react"

export function TodoInput(props) {
    const { handleAddTodo } = props
    const [taskNameInputValue, setInputValue] = useState('') 
    const [taskDurationInputValue, setDurationInputValue] = useState('') 
    const [taskCategoryInputValue, setCategoryInputValue] = useState('')
    return (
        <section className="mainInput">
            <form>
                <input value={taskNameInputValue} onChange={(e) => {
                    setInputValue(e.target.value)
                }} placeholder="Task name" />
                <input value={taskDurationInputValue} onChange={(e) => {
                    setDurationInputValue(e.target.value)
                }} placeholder="Task Duration" />
                <input value={taskCategoryInputValue} onChange={(e) => {
                    setCategoryInputValue(e.target.value)
                }} placeholder="Task Category" />
                <button onClick={() => {
                    if (!taskNameInputValue) { return }
                    handleAddTodo(taskNameInputValue, taskDurationInputValue, taskCategoryInputValue)
                    setInputValue('')
                    setDurationInputValue('')
                }}>
                    Create task
                </button>
            </form>
        </section>
    )
    
}