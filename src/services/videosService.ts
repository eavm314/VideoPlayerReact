import VideoInterface from "../models/VideoInterface";
import { API } from "./serverInstance";

export const getVideos = async () => {
  return await API.get("/videos");
};

export const addVideo = async (video:VideoInterface) => {
  return await API.post("/videos", video);
};

export const getVideoById = async (id:string) => {
  return await API.get(`/videos/${id}`);
}
 
export const updateMarks = async (id:string, updatedMarks: number[]) => {
  return await API.patch(`/videos/${id}`, {marks: updatedMarks});
};