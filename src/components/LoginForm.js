// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';
import {useLogin} from '../hooks/ApiHooks';
import {useNavigate} from 'react-router-dom';

const LoginForm = (props) => {
  const alkuarvot = {
    username: '',
    password: '',
  };

  const {postLogin} = useLogin();
  const navigate = useNavigate();

  const doLogin = async () => {
    console.log('doLogin');
    try {
      const userData = await postLogin(inputs);
      console.log(userData);
      localStorage.setItem('token', userData.token);
      navigate('/Home');
    } catch (err) {
      alert(err.message);
    }
  };

  const {inputs, HandleInputChange, HandleSubmit} = useForm(doLogin, alkuarvot);
  console.log(inputs);

  return (
    <form onSubmit={HandleSubmit}>
      <input
        placeholder="username"
        name="username"
        onChange={HandleInputChange}
        value={inputs.username}
      />
      <input
        placeholder="password"
        name="password"
        type="password"
        onChange={HandleInputChange}
        value={inputs.password}
      />
      <input type="submit" value="login" />
    </form>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
