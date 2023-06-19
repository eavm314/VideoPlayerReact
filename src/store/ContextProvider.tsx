import { createContext, useContext, useReducer } from "react";
import storeReducer, { initialValues } from "./storeReducer";

const StoreContext = createContext(null);

const StoreProvider = ({ children, selectedVideo }) => {
  return (
    <StoreContext.Provider value={useReducer(storeReducer, selectedVideo)}>
      {children}
    </StoreContext.Provider>
  )
}

const useStore = () => useContext(StoreContext)[0];
const useDispatch = () => useContext(StoreContext)[1];

export { StoreContext, useStore, useDispatch };
export default StoreProvider;