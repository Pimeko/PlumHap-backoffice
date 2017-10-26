export default function auth (
  state = {
    user_id: '',
    jwt: '',
    error: '',
    isLoggingIn: false,
    isLogged: false
  },
  action
) {
  switch (action.type) {
    case "LOGIN_STARTED":
      return {
        ...state,
        isLoggingIn: true,
        error: ''
      };
    case "LOGGED_SUCCESS":
      return {
        ...state,
        user_id: action.data.id,
        jwt: action.data.token,
        isLoggingIn: false,
        isLogged: true,
        error: ''
      };
    case "LOGGED_FAILED":
      return {
        ...state,
        error: action.error.message,
        isLoggingIn: false
      };
    default:
      return state;
  }
}
