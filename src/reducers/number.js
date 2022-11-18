const reducer = (currentState, action) => {
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }

  const newState = { ...currentState };

  if (action.type === "PLUS") {
    newState.number++;
  }

  if (action.type === "MINUS") {
    newState.number--;
  }

  return newState;

  // switch (action.type) { 내가 만드려고 했는데 안됨...ㅠ
  //   case "PLUS":
  //     return newState.number++;

  //   case "MINUS":
  //     return newState.number--;

  //   default:
  //     return (currentState = 1);
  // }
};

export default reducer;
