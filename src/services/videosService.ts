import VideoInterface from "../models/VideoInterface";

export const getVideos = (): VideoInterface[] => {
  const data = localStorage.getItem("data");
  if (!data) {
    localStorage.setItem("data", "[]");
    return [];
  }
  try {
    const videos = JSON.parse(data) as VideoInterface[];
    return videos;
  } catch (e) {
    alert("Error al leer los datos, reiniciando base de datos...")
    localStorage.setItem("data", "[]");
    return [];
  }
};

export const getVideoById = async (id: string) => {
  const videos = getVideos();
  return videos.find(v => v.id === id);
}

export const addVideo = async (video: VideoInterface) => {
  const videos = getVideos();
  const updatedVideos = [...videos, video]
  localStorage.setItem("data", JSON.stringify(updatedVideos));
};

export const deleteVideoById = async (id: string) => {
  const videos = getVideos();
  const updatedVideos = videos.filter(v => v.id !== id);
  localStorage.setItem("data", JSON.stringify(updatedVideos));
};

export const updateMarks = async (id: string, updatedMarks: number[]) => {
  const videos = getVideos();
  const updatedVideos = videos.map(v => {
    if (v.id === id) {
      v.marks = updatedMarks;
    }
    return v;
  })
  localStorage.setItem("data", JSON.stringify(updatedVideos));
};

export const updateName = async (id: string, name: string) => {
  const videos = getVideos();
  const updatedVideos = videos.map(v => {
    if (v.id === id) {
      v.name = name;
    }
    return v;
  })
  localStorage.setItem("data", JSON.stringify(updatedVideos));
};