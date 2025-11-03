import CharactersAPI from "../characters/characters";

const SingleCharacter = () => {
  const getCharacter = CharactersAPI.data.find(
    (character) => character.name === "Yuji Itadori"
  );
  const characterImageURL = getCharacter?.image_url;

  return (
    <div className="group perspective w-80 h-[26rem] m-auto mt-4">
      <div className="relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-700 transition-transform">
        <div className="absolute backface-hidden flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-blue-900 to-blue-400 rounded-2xl shadow-xl">
          {characterImageURL ? (
            <img
              src={`https://images.weserv.nl/?url=${characterImageURL}`}
              alt={getCharacter?.name || "Personaje no disponible"}
              className="w-auto h-60 mb-2 rounded-2xl"
            />
          ) : (
            <video
              src="/Imagen-no-disponible.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-auto h-60 mb-2 rounded-2xl"
            />
          )}

          <hr className="bg-blue-300 h-1 w-3/4 my-2" />

          <h1 className="text-white text-2xl font-bold">
            {getCharacter?.name || "Personaje no disponible"}
          </h1>
          <p className="text-white">
            <b>Edad:</b> {getCharacter?.age?.[0] || "?"} años
          </p>
          <p className="text-white">
            <b>Categoría:</b> {getCharacter?.grade || "Sin categoría"}
          </p>
          <p
            className={`text-white shadow p-1 rounded-2xl px-3 mt-2 ${
              getCharacter?.status === "Alive" ? "bg-blue-500/80" : "bg-red-500"
            }`}
          >
            <b>Estado:</b> {getCharacter?.status || "Desconocido"}
          </p>
        </div>

        <div className="absolute backface-hidden rotate-y-180 flex flex-col items-center justify-start text-center w-full h-full bg-gradient-to-br from-red-800 to-red-500 rounded-2xl shadow-xl text-white p-6 overflow-hidden">
          <h1 className="font-bold text-2xl mb-3">Descripción</h1>
          <div className="overflow-y-auto max-h-[17rem] px-2 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-transparent">
            <p className="text-sm leading-relaxed whitespace-pre-line">
              {getCharacter?.appearance || "No hay descripción disponible."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCharacter;
