import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/posts" />
        <Route component={Project} path="/projects" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
