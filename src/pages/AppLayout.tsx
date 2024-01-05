import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function AppLayout() {

  return (
    <div className='h-screen'>
      <NavBar/>
      <div className='m-5'>
        <Outlet/>
      </div>
    </div>
  );
}