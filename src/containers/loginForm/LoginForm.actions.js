import { CHANGE_FORM_INPUT_VALUE } from "./LoginForm.constants";

export const changeFormInputValue = (name, value) => {
  return {
    type: CHANGE_FORM_INPUT_VALUE,
    name,
    value
  };
};
