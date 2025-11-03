import { Catalog } from "./components/Catalog";
import Navbar from "./components/Navbar";
import SingleCharacter from "./components/SingleCharacter";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 ">
      <Navbar />
      <SingleCharacter />
      <Catalog />
    </div>
  );
}

export default App;
