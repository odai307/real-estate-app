const db = require('../config/database');

// Mock data for testing
const mockProperties = [
  {
    id: 1,
    title: "Luxury Villa in East Legon",
    location: "East Legon, Accra",
    price: 850000,
    description: "Stunning 5-bedroom luxury villa with modern architecture, private pool, and smart home features. Located in the prestigious East Legon neighborhood.",
    bedrooms: 5,
    bathrooms: 4,
    area: 450,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["Swimming Pool", "Smart Home", "Security System", "Garden", "Parking"]
  },
  {
    id: 2,
    title: "Modern Apartment in Cantonments",
    location: "Cantonments, Accra",
    price: 450000,
    description: "Contemporary 3-bedroom apartment with panoramic city views, high-end finishes, and 24/7 security. Perfect for professionals and small families.",
    bedrooms: 3,
    bathrooms: 2,
    area: 280,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["Gym", "Rooftop Terrace", "Concierge", "Underground Parking"]
  },
  {
    id: 3,
    title: "Beachfront House in Tema",
    location: "Tema, Greater Accra",
    price: 650000,
    description: "Exclusive beachfront property with direct access to the beach, spacious living areas, and breathtaking ocean views. Ideal for those seeking a coastal lifestyle.",
    bedrooms: 4,
    bathrooms: 3,
    area: 380,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["Beach Access", "Outdoor Kitchen", "Garden", "Security System"]
  },
  {
    id: 4,
    title: "Townhouse in Airport Residential",
    location: "Airport Residential, Accra",
    price: 550000,
    description: "Elegant townhouse in a gated community, featuring modern design, spacious rooms, and premium amenities. Close to the airport and major business districts.",
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["Gated Community", "Garden", "Security", "Parking"]
  },
  {
    id: 5,
    title: "Penthouse in Osu",
    location: "Osu, Accra",
    price: 750000,
    description: "Luxurious penthouse with stunning city views, high ceilings, and premium finishes. Located in the heart of Osu, close to restaurants and entertainment.",
    bedrooms: 3,
    bathrooms: 3,
    area: 350,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    features: ["Rooftop Terrace", "Smart Home", "Concierge", "Underground Parking"]
  }
];

class Property {
  static async getAll() {
    try {
      console.log('Returning mock properties...');
      return mockProperties;
    } catch (error) {
      console.error('Error in Property.getAll:', error);
      throw new Error(`Failed to fetch properties: ${error.message}`);
    }
  }

  static async getById(id) {
    try {
      console.log('Attempting to fetch property with id:', id);
      const property = mockProperties.find(p => p.id === parseInt(id));
      console.log('Property fetch result:', property ? 'Found' : 'Not found');
      return property;
    } catch (error) {
      console.error('Error in Property.getById:', error);
      throw new Error(`Failed to fetch property: ${error.message}`);
    }
  }
}

module.exports = Property; 