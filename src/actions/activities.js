import * as action_generator from './action_generator';

export const get_activities = () =>  {
  action_generator.generate("get_activities");

  return action_generator.call_get_request(
    'get_activities',
    'activities',
    () => {});
}

export const get_activitie = (id) =>  {
  action_generator.generate("get_activitie");

  return action_generator.call_get_request(
    'get_activitie',
    'activities/' + id,
    () => {});
}

export const update_activitie = (obj) =>  {
  action_generator.generate("update_activitie");

  var body = {
    data: obj.data
  };

  return action_generator.call_request(
    'update_activitie',
    'activities/' + obj.id,
    'PUT',
    body,
    () => {});
}

export const delete_activitie = (obj) =>  {
  action_generator.generate("delete_activitie");

  return action_generator.call_request(
    'delete_activitie',
    'activities/' + obj.id,
    'DELETE',
    {},
    () => {});
}

export const post_activitie = (obj) =>  {
  action_generator.generate("post_activitie");

  var body = {
    data: obj.data
  };

  return action_generator.call_request(
    'post_activitie',
    'activities/',
    'POST',
    body,
    () => {});
}
