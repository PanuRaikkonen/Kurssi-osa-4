import {useState} from 'react';

const useForm = (callback, initState) => {
  const [inputs, setInputs] = useState(initState);
  const HandleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
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
