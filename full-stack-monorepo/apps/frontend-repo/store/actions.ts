// store/actions.ts
export const setLoading = (isLoading: boolean) => ({
  type: 'SET_LOADING',
  payload: isLoading,
});

export const setSuccess = (message: string) => ({
  type: 'SET_SUCCESS',
  payload: message,
});

export const setError = (message: string) => ({
  type: 'SET_ERROR',
  payload: message,
});
