import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop";
import Video from "./components/Video";
import Iskopi from "./components/Iskopi";
import Kontakt from "./components/Kontakt";

gsap.registerPlugin(TextPlugin);

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/video-nadzor" index element={<Video />} />
          <Route path="/iskopi" index element={<Iskopi />} />
          <Route path="/kontakt" index element={<Kontakt />} />
        </Routes>
        <ScrollToTop />
      </Router>
    </>
  );
}

export default App;
