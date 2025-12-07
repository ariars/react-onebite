// const Button = (props) => {
//   console.log(props);
//   return <button style={{ color: props.color }}>{props.text}</button>;
// };

const Button = ({ children, text, color = "black" }) => {
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  //console.log(props);
  return (
    <button
      onClick={onClickButton}
      //onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
