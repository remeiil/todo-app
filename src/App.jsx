import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"

function App() {
  
  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get your groceries', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true }
  // ]

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', taskDuration: '5 mins', taskDuedate: '1970/01/01 00:01', taskCategory:['PC', 'Learning'] , complete: true }
  ])

  const [selectedTab, setSelectedTab] = useState('Open')

  function handleAddTodo(newTodo, newDuration, newDuedate, newCategory) {
    const newTodoList = [...todos, { input: newTodo, taskDuration: newDuration, taskDuedate: newDuedate, taskCategory:newCategory , complete: false }]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo (index) {
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo (index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleEditTodo (index, editedInputValue) {
    let newTodoList = [...todos]
    let editedTodo = todos[index]
    editedTodo['input'] = editedInputValue
    newTodoList[index] = editedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currentTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) {return}
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  return (
      <>        
        <Header todos={todos} />
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
        <main>
          <TodoInput handleAddTodo={handleAddTodo} />
          <TodoList handleEditTodo={handleEditTodo} handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos} />
        </main>
      </>
  )
}

export default App
