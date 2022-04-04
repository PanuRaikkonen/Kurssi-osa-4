import React from 'react';
import useForm from '../hooks/FormHooks';

const Upload = (props) => {
  const alkuarvot = {
    title: '',
    description: '',
  };

  const doUpload = async () => {
    try {
      console.log('asd');
    } catch (err) {
      alert.apply(err.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doUpload,
    alkuarvot
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="title"
        name="title"
        type="text"
        onChange={handleInputChange}
        value={inputs.title}
      />
      <input
        placeholder="description"
        name="description"
        type="textarea"
        onChange={handleInputChange}
        value={inputs.description}
      />
      <input
        name="file"
        type="file"
        accept="image/*, video/*, audio/*"
        onChange={handleInputChange}
      />
      <input type="submit" value="upload" />
    </form>
  );
};

Upload.propTypes = {};

export default Upload;
