import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = new Date().getDay()
    const { todos, selectedTab } = props
    const filteredTodoList = selectedTab === "All" ? todos :
    selectedTab === "Completed" ?
        todos.filter(val => val.complete) :
    selectedTab === "Daily" ? 
        todos.filter(val => !val.complete & val.taskRecurs === dayName[day] || !val.complete & val.taskRecurs === "Daily") :
        todos.filter(val => !val.complete)
    return (
        <>      
            {filteredTodoList.map((todo, todoIndex) => {
                return (
                    <TodoCard 
                        key={todoIndex} 
                        todoIndex={todos.findIndex(val => val.input == todo.input)}
                        {...props}
                        todo={todo} />
                )
            })}
        </>
    )
    
}