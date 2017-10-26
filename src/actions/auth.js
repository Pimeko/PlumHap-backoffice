import * as action_generator from './action_generator';

// Login
export const login = (user) =>  {
  action_generator.generate("login"); // a mettre ailleurs ?
  var body = {
    pseudo: user.pseudo,
    password: user.password,
  };
  return action_generator.call_request('login', 'login', 'POST',  body);
}
