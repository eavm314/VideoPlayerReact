import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import HomePage from './pages/HomePage';
import AppLayout from './pages/AppLayout';
import LibraryPage from './pages/LibraryPage';
import VideoPage from './pages/VideoPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { videos } from './models/SavedVideos';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        path: "library",
        element: <LibraryPage />,
      },
      {
        path: "video/:videoId?",
        element: <VideoPage />,
        loader: async ({params}) => {
          const { videoId } = params;
          if (!videoId){
            return {}
          }
          return videos[Number(videoId)];
        },
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
