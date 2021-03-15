import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import NotFound from "./components/error/NotFound";
import "./App.scss";

const App = () => {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/projects" component={Projects} />
          <Route component={NotFound} status={404} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
