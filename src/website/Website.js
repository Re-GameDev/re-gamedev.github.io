import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {SignUpLink} from './links.js';
import {EVENT_FULL_NAME} from './datas.js';

import HomePage from './misc/HomePage.js';
import AboutPage from './misc/AboutPage.js';
import FaqPage from './misc/FaqPage.js';
import LocationPage from './misc/LocationPage.js';
import SchedulePage from './misc/SchedulePage.js';
import SponsorsPage from './sponsors/SponsorsPage.js';
import FourOhFourPage from './misc/FourOhFourPage.js';

import logo from './red jam logo.svg';
import './Website.css';

function NavItem({text, url, link}) {
  if (!link) {
    link = ({ children }) => {
      return (
        <Link to={url}>
          {children}
        </Link>
      );
    };
  }

  const MyLink = link;

  return (
    <li className="NavItem">
      <MyLink>
        {text}
      </MyLink>
    </li>
  );
}

function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <NavItem text="Home" url="/" />
        <NavItem text="About" url="about" />
        <NavItem text="FAQ" url="faq" />
        <NavItem text="Location" url="location" />
        <NavItem text="Schedule" url="schedule" />
        <NavItem text="Sponsors" url="sponsors" />
        <NavItem link={SignUpLink} />
      </ul>
    </nav>
  );
}


export default function Website() {
  return (
    <Router>
      <div className="Website">

        <header>
          <Link to="/">
            <img className="logo" src={logo} width="272" height="150" alt={EVENT_FULL_NAME} title={EVENT_FULL_NAME} />
          </Link>
          <Nav />
        </header>

        <main>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/faq">
              <FaqPage />
            </Route>
            <Route exact path="/location">
              <LocationPage />
            </Route>
            <Route exact path="/schedule">
              <SchedulePage />
            </Route>
            <Route exact path="/sponsors">
              <SponsorsPage />
            </Route>
            <Route path="*">
              <FourOhFourPage />
            </Route>
          </Switch>
        </main>

        <footer>
          <p className="copyright">
            ® 2020 Redmond Eastside Game Developers 
          </p>
          <Nav />
        </footer>

      </div>
    </Router>
  );
}
