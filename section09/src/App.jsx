import './App.css'
import { useState, useRef, useReducer } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const modkData = [
    { 
      id:0, 
      isDone: false,
      content: 'Learn React',
      date: new Date().getTime()
    },
    { 
      id:1, 
      isDone: false,
      content: '노래하기',
      date: new Date().getTime()
    },
    { 
      id:2, 
      isDone: false,
      content: '빨래하기',
      date: new Date().getTime()
    },
  ];

function reducer(todos, action) {
  switch(action.type) {
    case "CREATE":
      return [action.data, ...todos];
    case "UPDATE":
      return todos.map((todo) => 
        todo.id === action.data.id 
          ? {...todo, isDone: !todo.isDone} 
          : todo
      );
    case "DELETE":
      return todos.filter((todo) => todo.id !== action.data.id);
    default:
      return todos;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, modkData);
  //const [todos, setTodos] = useState(modkData);

  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: { 
        id:idRef.current++, 
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    });

    // const newTodo = { 
    //   id:idRef.current++, 
    //   isDone: false,
    //   content: content,
    //   date: new Date().getTime()
    // }

    // setTodos([newTodo, ...todos]);
  }

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      data: { id: targetId }
    });

    // setTodos(todos.map((todo) => 
    //   todo.id === targetId 
    //     ? {...todo, isDone: !todo.isDone} 
    //     : todo
    // ));
  }

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      data: { id: targetId }
    });
    
    //setTodos(todos.filter((todo) => todo.id !== targetId));
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App;
