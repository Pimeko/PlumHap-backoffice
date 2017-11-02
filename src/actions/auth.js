import * as action_generator from './action_generator';

export const login = (user) =>  {
  action_generator.generate("login");
  var body = {
    pseudo: user.pseudo,
    password: user.password,
  };
  var success_function = (data) => {
    localStorage.setItem('jwt', data.token);
    localStorage.setItem('id', data.id);
  }
  return action_generator.call_request(
    'login',
    'login',
    'POST',
    body,
    success_function);
}
