
// src/pages/Home.jsx

import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PropertyList from '../components/PropertyList';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Nav />
      </header>
      <main className="flex-grow container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Welcome to Property Management</h1>
          <p className="text-lg mt-4">Find your perfect home from our list of properties</p>
        </div>
        <div>
          <PropertyList />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
