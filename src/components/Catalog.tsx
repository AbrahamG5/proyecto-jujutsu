import CharactersAPI from "../characters/characters";

const createItemsCatalog = () => {
  return CharactersAPI.data.map((element) => (
    <div
      key={element.id}
      className="flex-auto flex-col w-80 h-96 bg-linear-to-br from-blue-900 to-blue-300 rounded-2xl hover:scale-105 hover:transition-all hover:duration-300 hover:shadow-2xl hover:shadow-white/40 text-center p-2"
    >
      <img
        src={`https://images.weserv.nl/?url=${element.image_url}`}
        alt={element.name}
        className="w-auto h-60 mb-2 m-auto"
      />
      <hr className="bg-blue-400 h-1 w-full my-1" />
      <h1 className="text-white text-2xl mb-1 h-auto rounded-2xl">
        {element?.name || "Unknown"}
      </h1>
      <p className="text-white">
        <b>Edad: </b> {element?.age[0]} años
      </p>
      <p className="text-white">
        <b>Categoría: </b> {element?.grade || "Sin categoría"}
      </p>
    </div>
  ));
};

export const Catalog = () => {
  return (
    <div className="p-4 flex flex-wrap gap-5 flex-row h-full m-3   rounded-2xl bg-slate-600">
      {createItemsCatalog()}
    </div>
  );
};
