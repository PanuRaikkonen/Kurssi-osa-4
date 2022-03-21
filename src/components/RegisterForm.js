// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';

const RegisterForm = (props) => {
  const {inputs, HandleInputChange} = useForm();
  console.log(inputs);

  return (
    <form>
      <input
        placeholder="username"
        name="username"
        onChange={HandleInputChange}
      />
      <input
        placeholder="password"
        name="password"
        type="password"
        onChange={HandleInputChange}
      />
      <input
        placeholder="email"
        name="email"
        type="email"
        onChange={HandleInputChange}
      />
      <input
        placeholder="full name"
        name="full_name"
        onChange={HandleInputChange}
      />
      <input type="submit" value="register" />
    </form>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
