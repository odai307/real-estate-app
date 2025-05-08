import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Properties from '../components/Properties';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Box className="bg-primary-600 text-white py-16">
        <Container maxWidth="lg">
          <div className="text-center">
            <Typography variant="h3" className="font-bold mb-4">
              Find Your Dream Home in Ghana
            </Typography>
            <Typography variant="h6" className="mb-8 text-gray-100">
              Discover luxury properties in prime locations across Accra
            </Typography>
          </div>
        </Container>
      </Box>

      {/* Featured Properties Section */}
      <Container maxWidth="lg" className="py-16" id="properties">
        <Typography variant="h4" className="text-center font-bold mb-8">
          Featured Properties
        </Typography>
        <Properties />
      </Container>
    </div>
  );
};

export default HomePage; 