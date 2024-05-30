import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className=" flex flex-col items-center justify-center  bg-black shadow-xl rounded-xl">
        <div className="flex flex-col items-center justify-center h-full  bg-gray-900 my-8 w-[400px]">
          <Navbar />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
