import {Button, CircularProgress} from '@mui/material';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useMedia} from '../hooks/ApiHooks';
import useForm from '../hooks/FormHooks';

const Upload = () => {
  const [preview, setPreview] = useState('logo192.png');
  const alkuarvot = {
    title: '',
    description: '',
  };

  const {postMedia, Loading} = useMedia();
  const navigate = useNavigate();

  const doUpload = async () => {
    try {
      const token = localStorage.getItem('token');
      const formdata = new FormData();
      formdata.append('title', inputs.title);
      formdata.append('description', inputs.description);
      formdata.append('file', inputs.file);
      const mediaData = await postMedia(formdata, token);
      confirm(mediaData.message) && navigate('/home');
    } catch (err) {
      alert.apply(err.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doUpload,
    alkuarvot
  );

  useEffect(() => {
    if (inputs.file) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setPreview(reader.result);
      });
      reader.readAsDataURL(inputs.file);
    }
  }, [inputs.file]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="title"
        name="title"
        type="text"
        onChange={handleInputChange}
        value={inputs.title}
      />
      <textarea
        placeholder="description"
        name="description"
        type="textarea"
        onChange={handleInputChange}
        value={inputs.description}
      ></textarea>
      <input
        name="file"
        type="file"
        accept="image/*, video/*, audio/*"
        onChange={handleInputChange}
      />
      <img src={preview} alt="preview" />

      {Loading ? (
        <CircularProgress />
      ) : (
        <Button type="submit" value="upload" variant="contained">
          Upload
        </Button>
      )}
    </form>
  );
};

export default Upload;
