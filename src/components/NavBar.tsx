import { useLocation, useNavigate } from "react-router-dom"

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex bg-blue-500 p-3 shadow-md">
      <button onClick={() => navigate("/home")}
        className="text-3xl font-bold">
        Video Player React
      </button>

      { location.pathname !== "/app/library" &&
        <button onClick={() => navigate("/app/library")}
          className="ml-10 px-3 hover:bg-blue-400 text-lg">
          Library
        </button>
      }
    </div>
  )
}

export default NavBar