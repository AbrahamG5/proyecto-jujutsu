import CharactersAPI from "../characters/characters";

const SingleCharacter = () => {
  const getCharacter = CharactersAPI.data.find(
    (character) => character.name === "Yuji Itadori"
  );
  const characterImageURL = getCharacter?.image_url;

  return (
    <div className="flex flex-col w-80 h-96 bg-gradient-to-br from-blue-900 to-blue-300 rounded-2xl hover:scale-105 hover:transition-all hover:duration-300 hover:shadow-2xl hover:shadow-white/40 m-auto mt-4 hover:mt-8 items-center justify">
      <h1 className="text-white text-xl p-2 bg-">
        {getCharacter?.name || "Unknown"}
      </h1>
      <img
        src={`https://images.weserv.nl/?url=${characterImageURL}`}
        alt={`${getCharacter}`}
        className="w-auto h-60"
      />
    </div>
  );
};

export default SingleCharacter;
