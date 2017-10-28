export default function statements (
  state = {
    list: [],
    activity: {},
    error: '',
    hasFetched: false,
    hasUpdated: false,
    hasDeleted: false,
    hasPostedS: false
  },
  action
) {
  switch (action.type) {
    case "GET_ACTIVITIES_STARTED":
      return {
        ...state,
        error: '',
        hasFetched: false,
        hasUpdated: false,
        hasDeleted: false,
        hasPosted: false
      };
    case "GET_ACTIVITIES_SUCCESS":
      return {
        ...state,
        list: [
          ...action.data.activities
        ],
        error: ''
      };
    case "GET_ACTIVITIES_FAILED":
      return {
        ...state,
        error: action.error
      };

    case "GET_ACTIVITIES_STARTED":
      return {
        ...state,
        error: '',
        hasFetched: false
      };
    case "GET_ACTIVITIES_SUCCESS":
      return {
        ...state,
        activity: action.data.statement,
        error: '',
        hasFetched: true
      };
    case "GET_ACTIVITIES_FAILED":
      return {
        ...state,
        error: action.error,
        hasFetched: true
      };

    case "UPDATE_ACTIVITIES_STARTED":
      return {
        ...state,
        error: '',
        hasUpdated: false
      };
    case "UPDATE_ACTIVITIES_SUCCESS":
      return {
        ...state,
        error: '',
        hasUpdated: true
      };
    case "UPDATE_ACTIVITIES_FAILED":
      return {
        ...state,
        error: action.error,
        hasUpdated: true
      };

    case "DELETE_ACTIVITIES_STARTED":
      return {
        ...state,
        error: '',
      };
    case "DELETE_ACTIVITIES_SUCCESS":
      return {
        ...state,
        error: '',
        hasDeleted: true
      };
    case "DELETE_ACTIVITIES_FAILED":
      return {
        ...state,
        error: action.error
      };

    case "POST_ACTIVITIES_STARTED":
      return {
        ...state,
        error: '',
      };
    case "POST_ACTIVITIES_SUCCESS":
      return {
        ...state,
        error: '',
        hasPosted: true
      };
    case "POST_ACTIVITIES_FAILED":
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
