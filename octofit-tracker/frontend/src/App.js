

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import { Navbar, Nav, Container } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <Container className="mt-4">
        <Navbar bg="light" expand="lg" className="mb-4 rounded shadow-sm">
          <Navbar.Brand as={Link} to="/">Octofit Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/activities">Activités</Nav.Link>
              <Nav.Link as={Link} to="/leaderboard">Classement</Nav.Link>
              <Nav.Link as={Link} to="/teams">Équipes</Nav.Link>
              <Nav.Link as={Link} to="/users">Utilisateurs</Nav.Link>
              <Nav.Link as={Link} to="/workouts">Entraînements</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<h1 className="display-4 text-center mb-4">Bienvenue sur Octofit Tracker !</h1>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
