import {useState} from 'react';

const useForm = (callback) => {
  const [inputs, setInputs] = useState({});
  const HandleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
  };
  const HandleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => {
      return {
        ...inputs,
        [event.target.name]: event.target.value,
      };
    });
  };
  return {
    HandleSubmit,
    HandleInputChange,
    inputs,
  };
};

export default useForm;
