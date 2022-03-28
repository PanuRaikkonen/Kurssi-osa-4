// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';
import {useUser} from '../hooks/ApiHooks';

const RegisterForm = (props) => {
  const alkuarvot = {
    username: '',
    password: '',
    email: '',
    full_name: '',
  };

  const {postUser, getUsername} = useUser();

  const doRegister = async () => {
    console.log('doRegister');
    try {
      const checkUser = await getUsername(inputs.username);
      if (checkUser.available) {
        const userData = await postUser(inputs);
        console.log(userData);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const {inputs, HandleInputChange, HandleSubmit} = useForm(
    doRegister,
    alkuarvot
  );
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
      <input
        placeholder="email"
        name="email"
        type="email"
        onChange={HandleInputChange}
        value={inputs.email}
      />
      <input
        placeholder="full name"
        name="full_name"
        onChange={HandleInputChange}
        value={inputs.full_name}
      />
      <input type="submit" value="register" />
    </form>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
