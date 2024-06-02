import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import First from "./components/First";
import Second from "./components/Second";
import Switch from "./components/Switch";

gsap.registerPlugin(TextPlugin);

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" index element={<First />} />
          <Route path="/drugi" element={<Second />} />
        </Routes>
        <Switch />
      </Router>
    </>
  );
}

export default App;
