
import "./List.css"
import TodoItem from "./TodoItem";
import { useMemo, useState } from "react";

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

  // const getAnalyzedData = () => {
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo) => todo.isDone).length;
  //   const notDoneCount = totalCount - doneCount;
  //   return { totalCount, doneCount, notDoneCount };
  // }
  
  //const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

  const {totalCount, doneCount, notDoneCount} = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  return (
    <div className="list">
      <h4>Todo List 🍀</h4>
      <div>
        <div>totalCount : {totalCount}</div>
        <div>doneCount : {doneCount}</div>
        <div>notDoneCount : {notDoneCount}</div>
      </div>
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