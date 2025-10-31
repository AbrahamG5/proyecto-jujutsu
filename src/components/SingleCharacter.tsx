import CharactersAPI from "../characters/characters";

const SingleCharacter = () => {
  const getCharacter = CharactersAPI.data.find(
    (character) => character.name === "Yuji Itadori"
  );
  const characterImageURL = getCharacter?.image_url;

  return (
    <div className="group flex flex-col w-80 h-102 bg-linear-to-br from-blue-900 to-blue-300 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/40 m-auto mt-4 hover:my-8 items-center justify p-2">
      <div className="text-white overflow-hidden group-hover:visible  p-2 text-center">
        <h1 className="font-bold mb-2">Descripcion</h1>
        <p>{getCharacter?.appearance}</p>
      </div>

      <div className="group-hover:hidden items-center content-center text-center">
        <img
          src={`https://images.weserv.nl/?url=${characterImageURL}`}
          alt={`${getCharacter}`}
          className="w-auto m-auto h-60 mb-2"
        />
        <hr className="bg-blue-400 h-1 w-full my-1" />
        <h1 className="text-white text-2xl mb-1 h-auto rounded-2xl">
          {getCharacter?.name || "Unknown"}
        </h1>
        <p className="text-white">
          <b>Edad: </b>
          {getCharacter?.age[0]} años
        </p>
        <p className="text-white">
          <b>Categoría: </b> {getCharacter?.grade || "Sin categoría"}
        </p>
        <p
          className={`text-white shadow p-0.5 rounded-2xl px-3 mt-2 ${
            getCharacter?.status === "Alive" ? "bg-blue-500/80" : "bg-red-500"
          }`}
        >
          <b>Estado:</b> {getCharacter?.status || "Sin estado registrado"}
        </p>
      </div>
    </div>
  );
};

export default SingleCharacter;
