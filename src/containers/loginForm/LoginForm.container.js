import { connect } from "react-redux";

import LoginForm from "../../components/loginForm/LoginForm";
import { changeFormInputValue } from "./LoginForm.actions";

const mapStateToProps = state => ({
  loginForm: state.loginForm
});

const mapDispatchToProps = dispatch => ({
  onTimeChange: name => event => {
    dispatch(changeFormInputValue(name, event))    
  },
  onDateChange: name => event => {
    dispatch(changeFormInputValue(name, event))    
  },
  onChange: event => {
    const { name, value } = event.target;
    dispatch(changeFormInputValue(name, value))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
