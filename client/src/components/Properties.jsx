import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const Properties = () => {
  const [properties, setProperties] = useState([]);

  // Fetch properties from the backend API
  useEffect(() => {
    fetch('http://localhost:5000/properties')
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error('Error fetching properties:', error));
  }, []);

  return (
    <div className="properties p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Available Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Card key={property.id} className="shadow-lg p-4">
            <CardContent>
              <Typography variant="h5" className="text-lg font-semibold">
                {property.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Location: {property.location}
              </Typography>
              <Typography variant="body2" className="mt-2">
                Price: ${property.price}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className="mt-4"
                fullWidth
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Properties;
