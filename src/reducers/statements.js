export default function statements (
  state = {
    list: [],
    statement: {},
    error: '',
    hasFetchedStatement: false,
    hasUpdatedStatement: false,
    hasDeletedStatement: false,
    hasPostedStatement: false
  },
  action
) {
  switch (action.type) {
    case "GET_STATEMENTS_STARTED":
      return {
        ...state,
        error: '',
        hasFetchedStatement: false,
        hasUpdatedStatement: false,
        hasDeletedStatement: false,
        hasPostedStatement: false
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

    case "GET_STATEMENT_STARTED":
      return {
        ...state,
        error: '',
        hasFetchedStatement: false
      };
    case "GET_STATEMENT_SUCCESS":
      return {
        ...state,
        statement: action.data.statement,
        error: '',
        hasFetchedStatement: true
      };
    case "GET_STATEMENT_FAILED":
      return {
        ...state,
        error: action.error,
        hasFetchedStatement: true
      };

    case "UPDATE_STATEMENT_STARTED":
      return {
        ...state,
        error: '',
        hasUpdatedStatement: false
      };
    case "UPDATE_STATEMENT_SUCCESS":
      return {
        ...state,
        error: '',
        hasUpdatedStatement: true
      };
    case "UPDATE_STATEMENT_FAILED":
      return {
        ...state,
        error: action.error,
        hasUpdatedStatement: true
      };

    case "DELETE_STATEMENT_STARTED":
      return {
        ...state,
        error: '',
      };
    case "DELETE_STATEMENT_SUCCESS":
      return {
        ...state,
        error: '',
        hasDeletedStatement: true
      };
    case "DELETE_STATEMENT_FAILED":
      return {
        ...state,
        error: action.error
      };

    case "POST_STATEMENT_STARTED":
      return {
        ...state,
        error: '',
      };
    case "POST_STATEMENT_SUCCESS":
      return {
        ...state,
        error: '',
        hasPostedStatement: true
      };
    case "POST_STATEMENT_FAILED":
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
