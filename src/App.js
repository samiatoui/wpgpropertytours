import Contact from "./components/contact/Contact";
import "./App.css";
import Home from "./components/home/Home";
import Nxtlvl from "./components/nextlvl/Nxtlvl";


require('typeface-glacial-indifference')
function App() {
  return (
    <div className="App">
      <div className="sections">
        <Home />
        <Nxtlvl />
        <Contact />
      </div>
    </div>
  );
}



export default App;
