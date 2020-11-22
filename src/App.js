import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
      </div>
    </BrowserRouter>
  );
}

export default App;
