import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import VideoPage from './pages/VideoPage';
import { getVideoById, getVideos } from './services/videosService';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
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
        loader: async () => {
          return getVideos();
        },
      },
      {
        path: "video/:videoId?",
        element: <VideoPage />,
        loader: async ({ params }) => {
          const { videoId } = params;
          if (!videoId) {
            return {};
          }
          return getVideoById(videoId);
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
