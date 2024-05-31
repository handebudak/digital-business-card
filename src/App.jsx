import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className=" flex flex-col items-center justify-center  bg-[#23252C]">
        <div className="flex flex-col items-center justify-center h-full  bg-[#1A1B21] my-8 w-[400px]">
          <Navbar />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
