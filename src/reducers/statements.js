export default function statements (
  state = {
    list: [],
    error: ''
  },
  action
) {
  console.log(action);
  switch (action.type) {
    case "GET_STATEMENTS_STARTED":
      return {
        ...state,
        error: ''
      };
    case "GET_STATEMENTS_SUCCESS":
      return {
        ...state,
        list: [
          ...action.data.statements
        ],
        error: ''
      };
    case "GET_STATEMENTS_FAILED":
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
