const initialState = {
  active: 'food',
  categories: [
    // {
    //   normalized: 'food',
    //   display: 'FOOD',
    //   description: 'Category Description Goes Here',
    // },
    // {
    //   normalized: 'electronics',
    //   display: 'ELECTRONICS',
    //   description: 'Category Description Goes Here',
    // },
    // {
    //   normalized: 'games',
    //   display: 'GAMES',
    //   description: 'Category Description Goes Here',
    // },
    // {
    //   normalized: 'weapons',
    //   display: 'WEAPONS',
    //   description: 'Category Description Goes Here',
    // },
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'get_categories':
      state = {...state, categories: action.payload}
      return state;
    case 'food':
      state = {...state, active: action.type }
      return state;
    case 'electronics':
      state = {...state, active: action.type};
      return state;
    case 'games':
      state = {...state, active: action.type}
      return state;
    case 'weapons':
      state = {...state, active: action.type}
      return state;
    default: return state;
  }
}

export default reducer;