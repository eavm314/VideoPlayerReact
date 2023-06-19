import { useForm } from 'react-hook-form';
import { addVideo } from '../services/videosService';
import { generateID } from '../helpers/ids';

export const NewVideoForm = ({ setVideos }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const handleFormSubmit = (data) => {
    console.log("agregando...", data);
    const newVideo = {
      ...data,
      id: generateID(),
      marks: []
    }
    setVideos((videos) => [...videos, newVideo]);
    addVideo(newVideo);
    // onSubmit(data);
    reset();
  };

  return (
    <div className="w-96 h-56 my-2 py-3 px-5 bg-cyan-500">
      <h1 className='text-xl font-bold mb-2'>
        Agregar Nuevo Video
      </h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className='my-2'>
          <label htmlFor="name">Nombre del video:</label>
          <input className='w-full px-2'
            type="text" id="name" {...register('name')} />
        </div>

        <div className='my-2'>
          <label htmlFor="url">URL del video:</label>
          {errors.url && <span className='text-red-700 text-md ml-6'>*Ingresa una URL válida</span>}
          <input className='w-full px-2'
            type="text" id="url" {...register('url', { required: true, pattern: /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/i })} />
        </div>

        <button 
          className='bg-cyan-300 py-1 px-3 mt-3'
          type="submit">
          Agregar Video
        </button>
      </form>
    </div>
  );
}
