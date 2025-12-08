import './App.css'
import { useState, useRef } from 'react'
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

function App() {
  
  const [todos, setTodos] = useState(modkData);

  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = { 
      id:idRef.current++, 
      isDone: false,
      content: content,
      date: new Date().getTime()
    }

    setTodos([newTodo, ...todos]);
  }

  const onUpdate = (targetId) => {
    //. todos State 의 값들 중에
    // id 와 일치하는 id를 갖는 투두 아이템의 isDone, 값을 변경
    setTodos(todos.map((todo) => 
      todo.id === targetId 
        ? {...todo, isDone: !todo.isDone} 
        : todo
    ));
  }

  const onDelete = (targetId) => {
    //. todos State 의 값들 중에
    // id 와 일치하는 id를 갖는 투두 아이템을 제거
    setTodos(todos.filter((todo) => todo.id !== targetId));
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
