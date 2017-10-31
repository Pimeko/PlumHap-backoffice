import * as action_generator from './action_generator';

export const get_all = (name) =>  {
  var action_name = "get_" + name + "s";
  action_generator.generate(action_name);

  return action_generator.call_get_request(
    action_name,
    name + 's/',
    () => {});
}

export const get_one = (name, id) =>  {
  var action_name = "get_" + name;
  action_generator.generate(action_name);

  return action_generator.call_get_request(
    action_name,
    name + 's/' + id,
    () => {});
}

export const update_obj = (name, obj) =>  {
  var action_name = "update_" + name;
  action_generator.generate(action_name);

  return action_generator.call_request(
    action_name,
    name + 's/' + obj.id,
    'PUT',
    obj,
    () => {});
}

export const delete_obj = (name, obj) =>  {
  var action_name = "delete_" + name;
  action_generator.generate(action_name);

  return action_generator.call_request(
    action_name,
    name + 's/' + obj.id,
    'DELETE',
    {},
    () => {});
}

export const post_obj = (name, obj) =>  {
  var action_name = "post_" + name;
  action_generator.generate(action_name);

  var body = {
    data: obj.data
  };

  return action_generator.call_request(
    action_name,
    name + 's/',
    'POST',
    body,
    () => {});
}
