import {Button, CircularProgress, Grid, Slider} from '@mui/material';
import {useEffect, useState} from 'react';
import {TextValidator} from 'react-material-ui-form-validator';
import {ValidatorForm} from 'react-material-ui-form-validator';
import {useNavigate} from 'react-router-dom';
import {useMedia, useTag} from '../hooks/ApiHooks';
import useForm from '../hooks/FormHooks';
import {appID} from '../utils/variables';

const Upload = () => {
  const [preview, setPreview] = useState('logo192.png');
  const alkuarvot = {
    title: '',
    description: '',
  };

  const filterArvot = {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    sepia: 0,
  };

  const validators = {
    title: ['required', 'minStringLength: 3'],
    description: ['required', 'minStringLength: 2'],
    file: [],
  };

  const errorMessages = {
    title: ['required field', 'minimun 3 characters'],
    description: ['required field', 'minimum 2 characters'],
    file: ['required field', 'Not a valid file'],
  };

  const {postMedia, Loading} = useMedia();
  const {postTag} = useTag();
  const navigate = useNavigate();

  const doUpload = async () => {
    try {
      // Lisätään filtterit descriptionin
      const desc = {
        description: inputs.description,
        filters: filterInputs,
      };

      const token = localStorage.getItem('token');
      const formdata = new FormData();
      formdata.append('title', inputs.title);
      formdata.append('description', JSON.stringify(desc));
      formdata.append('file', inputs.file);
      const mediaData = await postMedia(formdata, token);
      const tagData = await postTag(
        {file_id: mediaData.file_id, tag: appID},
        token
      );
      confirm(tagData.message) && navigate('/home');
    } catch (err) {
      alert(err.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doUpload,
    alkuarvot
  );

  const {inputs: filterInputs, handleInputChange: handleSliderChange} = useForm(
    null,
    filterArvot
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

  console.log(inputs, filterInputs);

  return (
    <>
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          fullWidth
          placeholder="title"
          name="title"
          type="text"
          onChange={handleInputChange}
          value={inputs.title}
          validators={validators.title}
          errorMessages={errorMessages.title}
        />
        <TextValidator
          fullWidth
          placeholder="description"
          name="description"
          type="textarea"
          onChange={handleInputChange}
          value={inputs.description}
          validators={validators.description}
          errorMessages={errorMessages.description}
        />
        <TextValidator
          name="file"
          type="file"
          accept="image/*, video/*, audio/*"
          onChange={handleInputChange}
          validators={validators.file}
          errorMessages={errorMessages.file}
        />

        {Loading ? (
          <CircularProgress />
        ) : (
          <Button type="submit" value="upload" variant="contained">
            Upload
          </Button>
        )}
      </ValidatorForm>
      <Grid container>
        <Grid item xs={6}>
          <img
            style={{
              filter: `brightness(${filterInputs.brightness}%)
              contrast(${filterInputs.contrast}%)
              saturate(${filterInputs.saturation}%)
              sepia(${filterInputs.sepia}%)`,
            }}
            src={preview}
            alt="preview"
          />
        </Grid>
        <Grid container>
          <Grid item xs={3}>
            <Slider
              name="brightness"
              min={0}
              value={filterInputs.brightness}
              max={200}
              step={1}
              valueLabelDisplay="on"
              onChange={handleSliderChange}
            />
            <Slider
              name="contrast"
              min={0}
              value={filterInputs.contrast}
              max={200}
              step={1}
              valueLabelDisplay="on"
              onChange={handleSliderChange}
            />
            <Slider
              name="saturation"
              min={0}
              value={filterInputs.saturation}
              max={200}
              step={1}
              valueLabelDisplay="on"
              onChange={handleSliderChange}
            />
            <Slider
              name="sepia"
              min={0}
              value={filterInputs.sepia}
              max={200}
              step={1}
              valueLabelDisplay="on"
              onChange={handleSliderChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Upload;
