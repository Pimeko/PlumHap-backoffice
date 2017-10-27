import { browserHistory } from 'react-router'

export const check_auth = () => {
  if (localStorage.getItem('jwt') === null) {
      browserHistory.push('/');
  }
}
