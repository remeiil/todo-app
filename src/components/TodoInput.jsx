import { useState } from "react"

export function TodoInput(props) {
    const { handleAddTodo, selectedTab, resetRecurringComplete } = props
    const [taskNameInputValue, setInputValue] = useState("") 
    const [taskDurationInputValue, setDurationInputValue] = useState("") 
    const [taskDuedateInputValue, setDuedateInputValue] = useState("") 
    const [taskCategoryInputValue, setCategoryInputValue] = useState("")
    const [taskRecurringInputValue, setRecurringInputValue] = useState("")
    
    return (
        <section className="mainInput">
            <form>
                <input value={taskNameInputValue} onChange={(e) => {
                    setInputValue(e.target.value)
                }} placeholder="Task name" />
                <input value={taskDurationInputValue} onChange={(e) => {
                    setDurationInputValue(e.target.value)
                }} placeholder="Task Duration" />
                <input value={taskDuedateInputValue} onChange={(e) => {
                    setDuedateInputValue(e.target.value)
                }} placeholder="Due Date" type="date" />
                <input value={taskCategoryInputValue} onChange={(e) => {
                    setCategoryInputValue(e.target.value)
                }} placeholder="Task Category" />
                
                <p>Recurs on:</p>
                <select onChange={(e) => {
                        setRecurringInputValue(e.target.value) 
                    }}>
                    <option value="Individual">Individual</option>
                    <option value="Daily">Daily</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </select>
            
                <button onClick={() => {
                    if (!taskNameInputValue) { return }
                    handleAddTodo(taskNameInputValue, taskDurationInputValue, taskDuedateInputValue, taskCategoryInputValue, taskRecurringInputValue)
                    setInputValue('')
                    setDurationInputValue('')
                    setDuedateInputValue('')
                    setCategoryInputValue('')
                }}>
                    Create task
                </button>
            </form>
            {(selectedTab != "Daily" ? "" : 
                <button onClick={() => {
                    resetRecurringComplete()
                }}>
                    <i className="fa-solid fa-arrows-rotate"></i> <p>Reset Recurring Tasks</p>
                </button>
            ) } 
        </section>
    )
    
}