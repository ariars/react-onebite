import './App.css'
import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react'
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

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, modkData);
  //const [todos, setTodos] = useState(modkData);

  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: { 
        id:idRef.current++, 
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      data: { id: targetId }
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      data: { id: targetId }
    });
  }, []);

  const memoizedDispach = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispach}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
      
    </div>
  )
}

export default App;
