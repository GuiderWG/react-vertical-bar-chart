import "./App.css";
import BarChart from "./components/BarChart";
import { CharBar1, CharBar2 } from "./data";

const App = () => (
  <div className="container">
    <BarChart bars={CharBar1} />
    <BarChart bars={CharBar2} />
  </div>
);

export default App;
