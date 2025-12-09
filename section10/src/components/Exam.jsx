import { useReducer } from "react";

// 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
    switch(action.type) {   
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        default:
            return state;
    }
}

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    dispatch({
        type: "INCREASE",
        data: 1,
    });
  }

  const onClickMinus = () => {
    dispatch({
        type: "DECREASE",
        data: 1,
    });
  }

  return (
    <div>
        <h1>{state}</h1>
        <button onClick={onClickPlus}>+1</button>
        <button onClick={onClickMinus}>-1</button>
    </div>
  );
};
export default Exam;