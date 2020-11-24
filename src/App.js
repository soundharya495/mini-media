import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import HamB from "./Components/hamburger/HamB";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} /> */}
        <HamB />
      </div>
    </BrowserRouter>
  );
}

export default App;
