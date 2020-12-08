import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { About, Contact, Projects } from './pages';
import logo from "./logo.svg";
import "./App.css";

const NavBar = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Sobre mim</Link>
        </li>
        <li>
          <Link to="/projects">Projetos</Link>
        </li>
        <li>
          <Link to="/contact">Entre em contato</Link>
        </li>
      </ul>
    </nav>
  </header>
);

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <About />
    </Route>

    <Route path="/contact">
      <Contact />
    </Route>

    <Route path="/projects">
      <Projects />
    </Route>

    <Route>
      <section>
        <h1>Página não encontrada</h1>
      </section>
    </Route>
  </Switch>
);

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Meu portifólio</h1>
        <NavBar />
        <Routes />
      </header>
    </div>
  );
}

export default App;
