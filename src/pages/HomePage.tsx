import { useNavigate } from "react-router-dom";
import preview from "../assets/videoPlayerPreview.png"

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-500 py-4">
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
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2">
              <img src={preview} alt="Video App Preview" className="w-full rounded-lg shadow-lg mb-4" />
            </div>
            <div className="w-full sm:w-1/2 ml-10">
              <h3 className="text-xl font-bold mb-2">Funcionalidades</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Reproducción fluida de videos de alta calidad.</li>
                <li>Explora una amplia biblioteca de videos.</li>
                <li>Crea listas de reproducción personalizadas.</li>
                <li>Guarda tus videos favoritos para verlos más tarde.</li>
                <li>Control de reproducción: pausa, avance rápido, retroceso, etc.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="flex">
            <h2 className="text-2xl font-bold mb-4">Ventajas</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Acceso instantáneo a una amplia variedad de contenido de video.</li>
              <li>Interfaz de usuario intuitiva y fácil de usar.</li>
              <li>Reproducción sin interrupciones y alta calidad de video.</li>
              <li>Posibilidad de personalizar listas de reproducción según tus preferencias.</li>
              <li>Guarda y organiza tus videos favoritos para verlos en cualquier momento.</li>
            </ul>
            <div className="flex w-1/2">
              <button className="m-auto bg-blue-700 text-white text-2xl p-3 rounded-lg"
                onClick={() => navigate("/app/library")}>
                Hora de comenzar!
              </button>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
};

export default HomePage;
