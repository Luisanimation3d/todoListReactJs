import "../css/SearchBar.css";

export function SearchTaskBar({ searchType, setSearchType, foundTodo }) {
  const handleSearch = (e) => {
    setSearchType(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Java"
        onChange={handleSearch}
        value={searchType}
        className={`inputSearch ${foundTodo > 0 ? 'inputFound' : foundTodo === -1 ? 'inputNotFound': ''}`}
      />
      <span className={foundTodo === -1 ? 'notFound' : 'found'}>
        {
          foundTodo > 0 ? `Se encontró ${foundTodo} Tareas`
          :
          foundTodo === -1 ? 'No se encontró ninguna coincidencia'
          :
          ''
        }
      </span>
    </>
  );
}
