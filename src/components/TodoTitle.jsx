export function TodoTitle({total, completed}){
    return(
        <h1 className='taskTitleTodo'>Has completado {completed} de {total}</h1>
    )
}