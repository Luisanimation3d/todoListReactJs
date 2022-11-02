import { SearchTaskBar } from "./SearchTaskBar";
import { TodoListContainer } from "./TodoListContainer";
import { TodoTitle } from "./TodoTitle";
import { TaskItem } from "./TaskItem";

export function TodoContainer({
  totalTodos,
  totalCounterTodosCompleted,
  searchType,
  setSearchType,
  foundTodo,
  searched,
  completedTask,
  deleteTask,
  todos
}) {
  return (
    <div className="rightSection">
      <TodoTitle total={totalTodos} completed={totalCounterTodosCompleted} />
      <SearchTaskBar
        searchType={searchType}
        setSearchType={setSearchType}
        foundTodo={foundTodo}
      />
      <TodoListContainer>
        {todos.length > 0 ? (
          searched.map((task) => (
            <TaskItem
              key={task.id}
              title={task.title}
              completed={task.completed}
              completedTask={() => completedTask(task.id)}
              deleteTask={() => deleteTask(task.id)}
            />
          ))
        ) : (
          <span className='vacio'>No hay ninguna tarea, <span>¡CREA UNA!</span></span>
        )}
      </TodoListContainer>
    </div>
  );
}
