import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Projects from './pages/Projects';
import PostsRoute from './pages/posts/PostsRoute';
import NotFound from './components/error/NotFound';
import './App.scss';

const App = () => {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/projects" component={Projects} />
          <PostsRoute />
          <Route component={NotFound} status={404} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
