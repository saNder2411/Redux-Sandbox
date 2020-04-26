const initialState = 0;

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case `DEC`:
      return --state;

    case `INC`:
      return ++state;

    case `RND_DEC`:
      return state - action.payload;

    case `RND_INC`:
      return state + action.payload;

    default:
      return state;
  }
};

export default reducer;