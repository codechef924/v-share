import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ShareText from "./pages/ShareText";
import PublishedText from "./pages/PublishedText";
import About from "./pages/About";
import LiveRoom from "./pages/LiveRoom";
import CreateRoom from "./pages/CreateRoom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShareText />} />
        <Route path="about" element={<About />} />
        <Route path="published/:id" element={<PublishedText />} />
        <Route path="liveroom" element={<CreateRoom />} />
        <Route path="liveroom/:id" element={<LiveRoom />} />
      </Routes>
    </>
  );
}

export default App;
