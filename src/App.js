import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PhotoContextProvider from "./contexts/PhotoContext";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <PhotoContextProvider>
        <Router>
          <Navbar />
          <hr></hr>
          <Switch>
          <Route exact path="/">
              <Gallery query={'recent'}/>
            </Route>
            <Route exact path="/birds">
              <Gallery query={'birds'}/>
            </Route>
            <Route exact path="/mountain">
            <Gallery query={'mountain'} />
            </Route>
            <Route exact path="/food">
            <Gallery query={'food'}/>
            </Route>
            <Route exact path="/sky">
            <Gallery query={'sky'} />
            </Route>
            <Route exact path="/search/:searchValue">
              <Gallery  />
            </Route>
          </Switch>
        </Router>
      </PhotoContextProvider>
    </div>
  );
}

export default App;
