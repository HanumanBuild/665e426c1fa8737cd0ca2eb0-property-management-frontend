
// src/components/PropertyList.jsx

import React from 'react';
import PropertyCard from './PropertyCard';
import properties from '../lib/properties';

const PropertyList = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
