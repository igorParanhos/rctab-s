import { CHANGE_FORM_INPUT_VALUE, initialState } from "./LoginForm.constants";

const loginForm = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORM_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value
      };
    default:
      return state
  }
};

export default loginForm;
