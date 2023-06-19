import { useForm } from 'react-hook-form';
import { addVideo } from '../services/videosService';
import VideoInterface from '../models/VideoInterface';
import { generateID } from '../helpers/ids';

export const NewVideoForm = ({setVideos}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleFormSubmit = (data) => {
    console.log("agregando...",data);
    const newVideo = {
      ...data,
      id: generateID(),
      marks: []
    }
    setVideos((videos) => [...videos, newVideo]);
    addVideo(newVideo);
    // onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label htmlFor="name">Nombre del video:</label>
        <input type="text" id="name" {...register('name', { required: true })} />
        {errors.name && <span>Este campo es obligatorio</span>}
      </div>

      <div>
        <label htmlFor="url">URL del video:</label>
        <input type="text" id="url" {...register('url', { required: true, pattern: /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/i })} />
        {errors.url && <span>Ingresa una URL válida</span>}
      </div>

      <button type="submit">Agregar Video</button>
    </form>
  );
}
