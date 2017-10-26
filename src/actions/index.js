import * as types from '../types';

// Login
export const login = (user) =>  {
  return function(dispatch) {
    dispatch(login_started);

    fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pseudo: user.pseudo,
        password: user.password,
      })
    })
    .then(response=>response.json())
    .then(data => {
      console.log("Data fetched : ", data);
      if (data.success) {
        dispatch(login_success(data));
      } else {
        dispatch(login_error(data));
      }
    })
  }
}

export const login_started = () => ({
  type: types.LOGIN_STARTED
})

export const login_error = (error) => ({
  type: types.LOGGED_FAILED,
  error
})

export const login_success = (data) => ({
  type: types.LOGGED_SUCCESS,
  data
})
