import * as action_generator from './action_generator';

export const get_statements = () =>  {
  action_generator.generate("get_statements");

  return action_generator.call_get_request(
    'get_statements',
    'statements',
    () => {});
}

export const get_statement = (id) =>  {
  action_generator.generate("get_statement");

  return action_generator.call_get_request(
    'get_statement',
    'statements/' + id,
    () => {});
}

export const update_statement = (statement) =>  {
  action_generator.generate("update_statement");

  var body = {
    data: statement.data
  };

  return action_generator.call_request(
    'update_statement',
    'statements/' + statement.id,
    'PUT',
    body,
    () => {});
}
