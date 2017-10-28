import * as action_generator from './action_generator';

export const get_activities = () =>  {
  action_generator.generate("get_activities");

  return action_generator.call_get_request(
    'get_activities',
    'activities',
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

export const delete_statement = (statement) =>  {
  action_generator.generate("delete_statement");

  return action_generator.call_request(
    'delete_statement',
    'statements/' + statement.id,
    'DELETE',
    {},
    () => {});
}

export const post_statement = (statement) =>  {
  action_generator.generate("post_statement");

  var body = {
    data: statement.data
  };

  return action_generator.call_request(
    'post_statement',
    'statements/',
    'POST',
    body,
    () => {});
}
