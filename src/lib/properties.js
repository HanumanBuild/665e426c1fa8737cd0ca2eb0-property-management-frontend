
// src/lib/properties.js

// This file contains the hardcoded property data. It exports an array of property objects,
// each containing details like id, name, address, price, description, and imageUrl.
// This data will be used by the PropertyList and PropertyDetails components.

const properties = [
  {
    id: 1,
    name: "Sunny Apartment",
    address: "123 Sunshine St, Sunnyville",
    price: "$1200/month",
    description: "A bright and sunny apartment with 2 bedrooms and 1 bathroom.",
    imageUrl: "link_to_image_1"
  },
  {
    id: 2,
    name: "Cozy Cottage",
    address: "456 Cozy Ln, Comfort Town",
    price: "$900/month",
    description: "A cozy cottage with 1 bedroom and 1 bathroom.",
    imageUrl: "link_to_image_2"
  },
  {
    id: 3,
    name: "Modern Loft",
    address: "789 Modern Ave, Metropolis",
    price: "$1500/month",
    description: "A stylish loft with 1 bedroom and 1 bathroom, located in the heart of the city.",
    imageUrl: "link_to_image_3"
  },
  {
    id: 4,
    name: "Suburban House",
    address: "101 Suburbia Rd, Pleasantville",
    price: "$2000/month",
    description: "A spacious house with 3 bedrooms and 2 bathrooms, perfect for families.",
    imageUrl: "link_to_image_4"
  },
  {
    id: 5,
    name: "Beachfront Villa",
    address: "202 Ocean Dr, Beach City",
    price: "$3000/month",
    description: "A luxurious villa with 4 bedrooms and 3 bathrooms, offering stunning ocean views.",
    imageUrl: "link_to_image_5"
  }
  // Add more properties as needed
];

export default properties;
