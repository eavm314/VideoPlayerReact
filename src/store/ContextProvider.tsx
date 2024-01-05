import { ReactNode, createContext, useContext, useReducer } from "react";
import VideoInterface from "../models/VideoInterface";
import storeReducer from "./storeReducer";

const StoreContext = createContext(null);

interface Props {
  selectedVideo: VideoInterface;
  children: ReactNode
}

const StoreProvider = ({ children, selectedVideo }: Props) => {
  return (
    <StoreContext.Provider value={useReducer(storeReducer, selectedVideo)}>
      {children}
    </StoreContext.Provider>
  )
}

const useStore = () => useContext(StoreContext)[0];
const useDispatch = () => useContext(StoreContext)[1];

export { StoreContext, useDispatch, useStore };
export default StoreProvider;