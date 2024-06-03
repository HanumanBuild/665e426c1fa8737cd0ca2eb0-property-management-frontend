
// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header>
          <Nav />
        </header>
        <main className="flex-grow container mx-auto py-8">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/property/:id" component={PropertyDetails} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;
