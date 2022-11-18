const initialState = {
  number: 1,
};

const reducer = (currentState = initialState, action) => {
  // const newState = { ...currentState }; 생활코딩 방법 initialState 없이 진행

  // if (action.type === "PLUS") {
  //   newState.number++;
  // }

  // if (action.type === "MINUS") {
  //   newState.number--;
  // }

  // return newState;

  // 벨로퍼트 방법
  switch (action.type) {
    case "PLUS":
      return {
        ...currentState,
        number: currentState.number + 1,
      };

    case "MINUS":
      return {
        ...currentState,
        number: currentState.number - 1,
      };

    default:
      return currentState;
  }
};

export default reducer;
