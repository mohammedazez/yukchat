import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Home from "./components/Home";
import ChatRoom from "./components/ChatRoom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:roomId" component={ChatRoom} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
