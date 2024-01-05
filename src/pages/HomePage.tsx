import { IconBrandGithubCopilot, IconBrandGithubFilled } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import preview from "../assets/videoPlayerPreview.png";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-500 py-4 sticky top-0">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-4xl">Video Player React</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Reproduce tus videos favoritos</h2>
          <p className="text-gray-700 mb-6">
            La aplicación de reproducción de video te permite disfrutar de tus videos favoritos en cualquier momento y lugar.
          </p>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <img src={preview} alt="Video App Preview" className="w-full rounded-lg shadow-lg mb-4" />
            </div>
            <div className="w-full md:w-1/2 md:ml-10">
              <h3 className="text-2xl font-bold mb-2">Funcionalidades</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Reproducción fluida de videos de alta calidad.</li>
                <li>Crea una amplia biblioteca de videos de Youtube, Facebook y Twitch.</li>
                <li>Guarda tus videos favoritos para verlos más tarde.</li>
                <li>Agrega marcadores para regresar a tus momentos favoritos en cualquier momento.</li>
                <li>Control de reproducción: pausa, avance rápido, retroceso, etc.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="flex flex-wrap">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Ventajas</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Acceso instantáneo a una amplia variedad de contenido de video.</li>
                <li>Interfaz de usuario intuitiva y fácil de usar.</li>
                <li>Reproducción sin interrupciones.</li>
                <li>Accede a tus videos favoritos rápidamente.</li>
              </ul>
            </div>
            <div className="md:w-1/2 grid max-md:mt-10">
              <button className="m-auto bg-blue-700 text-white text-2xl p-3 rounded-lg"
                onClick={() => navigate("/app/library")}>
                Hora de comenzar!
              </button>
            </div>
          </div>
        </section>

      </main>
      <hr className="h-1 bg-slate-300"/>
      <footer className="flex justify-center text-slate-800">
        <a 
          href="https://github.com/eavm314/VideoPlayerReact"
          target="_blank"
          className="border-2 border-slate-600 rounded my-5 flex p-1">
          <IconBrandGithubFilled />
          <h3 className="my-auto mx-2">Github Repository</h3>
        </a>
      </footer>
    </div>
  );
};

export default HomePage;
