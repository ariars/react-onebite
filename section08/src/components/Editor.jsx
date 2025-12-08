import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({onCreate}) => {
  const [content, setContent] = useState("");
  const conteRef = useRef("");

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if(e.keyCode === 13)
    {
      onSubmit();
    } 
  };

  const onSubmit = () => {
    if(content === "")
    {
      conteRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
  <div className="editor">
    <input type="text" value={content} ref={conteRef} onChange={onChangeContent} onKeyDown={onKeyDown} placeholder="새로운 Todo..." />
    <button onClick={onSubmit}>추가</button>
  </div>
  );
};
export default Editor;