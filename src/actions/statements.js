import * as action_generator from './action_generator';

export const get_statements = () =>  {
  action_generator.generate("get_statements");

  return action_generator.call_get_request(
    'get_statements',
    'statements',
    () => {});
}
