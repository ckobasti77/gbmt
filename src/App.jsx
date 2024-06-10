import gsap from "gsap";
import { TextPlugin, ScrollTrigger } from "gsap/all";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Video from "./pages/Video";
import Iskopi from "./pages/Iskopi";
import Kontakt from "./pages/Kontakt";
import Home from "./pages/Home";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <div className="montserrat-font">
      <Router>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/video-nadzor" index element={<Video />} />
          <Route path="/iskopi" index element={<Iskopi />} />
          <Route path="/kontakt" index element={<Kontakt />} />
        </Routes>
        {/* <ScrollToTop /> */}
      </Router>
    </div>
  );
}

export default App;
