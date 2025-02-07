// store/reducers.ts
const initialState = {
  loading: false,
  successMessage: '',
  errorMessage: '',
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_SUCCESS':
      return { ...state, successMessage: action.payload };
    case 'SET_ERROR':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
