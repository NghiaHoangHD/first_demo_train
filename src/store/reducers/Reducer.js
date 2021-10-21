const Reducer = (state, action) => {
  switch(action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        isFetching: true,
        error: false
      };

  }
}

export default Reducer;
