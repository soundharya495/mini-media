import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import HamB from "./Components/hamburger/HamB";
import Toast from "./Components/toast/Toast";
import Typewriter from "./Components/typewriter/Typewriter";
import Home from "./Components/popup/Home";
import Darkmode from "./Components/darkmode-toggle/Darkmode";
import Carousel from "./Components/carousel/carousel";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} /> */}
        <Carousel />
      </div>
    </BrowserRouter>
  );
}

export default App;
