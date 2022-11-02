import '../css/listItem.css';

export function TodoListContainer({children}){
    return(
        <ul className="listContainer">
            {children}
        </ul>
    )
}