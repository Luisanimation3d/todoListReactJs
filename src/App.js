import "./css/App.css";
import { useEffect, useState } from "react";
import { TodoContainer } from "./components/TodoContainer";
import { Form } from "./components/Form";

function App() {
  const data = localStorage.taskTodo == null ? [] : JSON.parse(localStorage.taskTodo); 
  // const testTodos = [
  //   {
  //     id: 1,
  //     title: "Pasear al perro",
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Alimentar al gato",
  //     completed: false,
  //   },
  //   {
  //     id: 3,
  //     title: "Practicar ReactJs",
  //     completed: false,
  //   },
  // ];
  const [todos, setTodos] = useState(data);
  const [searchType, setSearchType] = useState("");
  const [foundTodo, setFoundTodo] = useState(0);
  const [inputNewTask, setInputNewTask] = useState("");

  let totalTodos = todos.length;
  let totalCounterTodosCompleted = todos.filter(
    (task) => !!task.completed
  ).length;
  const completedTask = (id) => {
    const foundTask = todos.findIndex((task) => task.id === id);
    const editedTasks = [...todos];
    editedTasks[foundTask].completed = !editedTasks[foundTask].completed;
    setTodos(editedTasks);
    localStorage.taskTodo = JSON.stringify(editedTasks)
  };

  const deleteTask = (id) => {
    const foundTask = todos.findIndex((task) => task.id === id);
    const deleteTasks = [...todos];
    deleteTasks.splice(foundTask, 1);
    setTodos(deleteTasks);
    localStorage.taskTodo = JSON.stringify(deleteTasks)
  };

  const addTask = (title) => {
    const newTask = {
      id: todos.length + 1,
      title,
      completed: false
    }
    const tasks = [...todos, newTask];
    setTodos(tasks);
    localStorage.taskTodo = JSON.stringify(tasks)
    setInputNewTask("")
  };

  let searched = [];

  if (!searchType >= 1) {
    searched = todos;
  } else {
    searched = todos.filter((task) => {
      let taskFound = task.title.toLowerCase();
      let searchedTask = searchType.toLowerCase();
      return taskFound.includes(searchedTask);
    });
  }
  useEffect(() => {
    if (!searchType >= 1) {
      setFoundTodo(0);
    } else {
      if (searched.length === 0) {
        setFoundTodo(-1);
      } else {
        setFoundTodo(searched.length);
      }
    }
  }, [searchType, searched.length]);
  return (
    <div className='container'>
      <TodoContainer totalTodos={totalTodos} totalCounterTodosCompleted={totalCounterTodosCompleted} searchType={searchType} setSearchType={setSearchType} foundTodo={foundTodo} searched={searched}completedTask={completedTask} deleteTask={deleteTask} todos={todos} />
      <Form inputNewTask={inputNewTask} setInputNewTask={setInputNewTask} addTask={addTask}/>
    </div>
  );
}

export default App;
