import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Post from './components/Post';
import About from './components/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SinglePost from './components/SinglePost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Post} />
          <Route exact path="/posts/:id" component={SinglePost} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
