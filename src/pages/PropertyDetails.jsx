
// src/pages/PropertyDetails.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import properties from '../lib/properties';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find(prop => prop.id === parseInt(id));

  if (!property) {
    return (
      <div className="flex flex-col min-h-screen">
        <header>
          <Nav />
        </header>
        <main className="flex-grow container mx-auto py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">Property Not Found</h1>
            <p className="text-lg mt-4">The property you are looking for does not exist.</p>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Nav />
      </header>
      <main className="flex-grow container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">{property.name}</h1>
          <p className="text-lg mt-4">{property.address}</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src={property.imageUrl} alt={property.name} className="w-full h-auto rounded-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <PropertyCard property={property} />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PropertyDetails;
