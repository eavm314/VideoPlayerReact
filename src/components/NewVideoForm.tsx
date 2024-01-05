import { SubmitHandler, useForm } from 'react-hook-form';
import { addVideo } from '../services/videosService';
import { generateID } from '../helpers/ids';
import { Dispatch, SetStateAction } from 'react';
import VideoInterface from '../models/VideoInterface';
import { INewVideoForm } from '../models/NewVideoForm';

interface Props {
  setVideos: Dispatch<SetStateAction<VideoInterface[]>>
}

export const NewVideoForm = ({ setVideos }: Props) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<INewVideoForm>();

  const handleFormSubmit: SubmitHandler<INewVideoForm> = (data) => {
    const newVideo: VideoInterface = {
      ...data,
      id: generateID(),
      marks: []
    }
    setVideos((videos) => [...videos, newVideo]);
    addVideo(newVideo);

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
          <input className='w-full px-2' placeholder='Youtube, Facebook, Twitch'
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
