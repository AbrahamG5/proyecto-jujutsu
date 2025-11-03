import CharactersAPI from "../characters/characters";

const createItemsCatalog = () => {
  return CharactersAPI.data.map((element) => (
    <div
      key={element.id}
      className="group perspective w-80 h-[26rem] m-auto mt-4"
    >
      <div className="relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-700 transition-transform">
        <div className="absolute backface-hidden flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-gray-800 to-gray-600 rounded-2xl shadow-xl">
          {element.image_url ? (
            <img
              src={`https://images.weserv.nl/?url=${element.image_url}`}
              alt={element.name || "Personaje no disponible"}
              className="w-auto h-60 mb-2 rounded-2xl"
            />
          ) : (
            <video
              src="/Personaje-no-disponible.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-auto h-60 mb-2 rounded-2xl"
            />
          )}

          <hr className="bg-blue-400 h-1 w-3/4 my-2 group-hover:bg-white" />

          <h1 className="text-white text-2xl mb-1 font-bold">
            {element?.name || "Unknown"}
          </h1>
          <p className="text-white">
            <b>Edad:</b> {element?.age?.[0] || "?"} años
          </p>
          <p className="text-white">
            <b>Categoría:</b> {element?.grade || "Sin categoría"}
          </p>
        </div>

        <div className="absolute backface-hidden rotate-y-180 flex flex-col items-center justify-start text-center w-full h-full bg-gradient-to-br from-red-800 to-red-500 rounded-2xl shadow-xl text-white p-6 overflow-hidden">
          <h1 className="font-bold text-2xl mb-3">Descripción</h1>
          <div className="overflow-y-auto max-h-[17rem] px-2 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-transparent">
            <p className="text-sm leading-relaxed whitespace-pre-line">
              {element?.appearance || "No hay descripción disponible."}
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
};

export const Catalog = () => {
  return (
    <div className="p-4 flex flex-wrap justify-center gap-5 h-full m-3 rounded-2xl bg-slate-700">
      {createItemsCatalog()}
    </div>
  );
};
