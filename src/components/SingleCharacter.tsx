import CharactersAPI from "../characters/characters";

const SingleCharacter = () => {
  const getCharacter = CharactersAPI.data.find(
    (character) => character.name === "Yuji Itadori"
  );
  const characterImageURL = getCharacter?.image_url;

  return (
    <div className="flex flex-col w-80 h-96 bg-linear-to-br from-blue-900 to-blue-300 rounded-2xl hover:scale-105 hover:transition-all hover:duration-300 hover:shadow-2xl hover:shadow-white/40 m-auto mt-4 hover:my-8 items-center justify p-2">
      if (!characterImageURL) {<h1>:C Imagen no disponible</h1>} else{" "}
      {
        <img
          src={`https://images.weserv.nl/?url=${characterImageURL}`}
          alt={`${getCharacter}`}
          className="w-auto h-60 mb-2"
        />
      }
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
    </div>
  );
};

export default SingleCharacter;
