import { browserHistory } from 'react-router'

export const check_auth = (connected) => {
  if (connected === "true" && localStorage.getItem('jwt') === null) {
      browserHistory.push('/');
  }
}
