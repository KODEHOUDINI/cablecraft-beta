import { Toaster } from "react-hot-toast";
import CableCraftNav from "./Components/CableCraftNav";
import Experience from "./Components/Experience";
import GlassBanner from "./Components/GlassBanner";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <div className="bg-black h-[100vh]">
        <CableCraftNav />
        {/* Glass Banner */}
        <GlassBanner />
        {/* 3D Experience Here */}
        <Experience />
      </div>
    </>
  );
}

export default App;
