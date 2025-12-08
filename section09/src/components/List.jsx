
import "./List.css"
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({todos, onUpdate, onDelete}) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const getFilteredTodos = () => {
    if(search.trim() === "") {
      return todos;
    }

    return todos.filter((todo) => {
      todo.content
        .toLowerCase()
        .includes(search.toLowerCase());
    });
  }

  const filteredTodos = getFilteredTodos();

  return (
    <div className="list">
      <h4>Todo List 🍀</h4>
      <input type="text" value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
};
export default List;