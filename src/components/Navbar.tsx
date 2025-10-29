import { useState } from "react";

function Navbar() {
  const [text, obtainText] = useState("");
  return (
    <div className="p-2">
      <nav
        className=" flex h-14 p-1 bg-linear-to-b from-indigo-800 to-indigo-500 shadow-white shadow-xs
      border-b border-b-white items-center content-center rounded-2xl"
      >
        <input
          id="inputCharacter"
          type="text"
          placeholder="Ingresa el personaje a buscar"
          className="text-white bg-slate-500 mx-2 rounded-2xl pl-2 w-58 border h-8"
          value={text}
          onChange={(inputText) => {
            obtainText(inputText.target.value);
          }}
        />
        <button className="bg-slate-600 text-white w-20 rounded-2xl hover:bg-slate-500 transition-all duration-300 cursor-pointer border h-8">
          Buscar
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
