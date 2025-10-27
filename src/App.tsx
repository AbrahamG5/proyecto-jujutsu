import Navbar from "./mainpage/components/navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 ">
      <Navbar />;
      <div className="content-center justify-center items-center max-w-dvw">
        <h1 className="text-white text-2xl font-semibold bg-slate-400 max-w-xs border-white border-2 rounded-2xl text-center m-auto mt-3">
          JujuPedia
        </h1>
      </div>
      <div className="size-50 bg-linear-to-br from-blue-900 to-blue-300 rounded-2xl hover:scale-105 hover:transition-all hover:duration-300 hover:shadow-2xl hover:shadow-white/40 m-auto"></div>
    </div>
  );
}

export default App;
