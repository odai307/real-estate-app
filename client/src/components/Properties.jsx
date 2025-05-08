import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, CircularProgress, CardMedia, Chip, Stack } from '@mui/material';
import { LocationOn, Hotel, Bathtub, SquareFoot } from '@mui/icons-material';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/properties');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log('Fetched properties:', result);
        if (result.success) {
          setProperties(result.data);
        } else {
          throw new Error(result.error || 'Failed to fetch properties');
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        <h2 className="text-xl font-bold">Error loading properties</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="properties">
      {properties.length === 0 ? (
        <p className="text-center text-gray-500">No properties available</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {properties.map((property) => (
            <Card key={property.id} className="shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col">
                <CardMedia
                  component="img"
                  className="w-full h-48 object-cover"
                  image={property.image}
                  alt={property.title}
                />
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <Typography variant="h6" className="text-lg font-semibold">
                      {property.title}
                    </Typography>
                    <Typography variant="h6" className="text-primary-600 font-bold">
                      ${property.price.toLocaleString()}
                    </Typography>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <LocationOn className="text-sm mr-1" />
                    <Typography variant="body2">
                      {property.location}
                    </Typography>
                  </div>

                  <div className="flex items-center space-x-4 mb-3 text-gray-600">
                    <div className="flex items-center">
                      <Hotel className="text-sm mr-1" />
                      <Typography variant="body2">{property.bedrooms} beds</Typography>
                    </div>
                    <div className="flex items-center">
                      <Bathtub className="text-sm mr-1" />
                      <Typography variant="body2">{property.bathrooms} baths</Typography>
                    </div>
                    <div className="flex items-center">
                      <SquareFoot className="text-sm mr-1" />
                      <Typography variant="body2">{property.area} sq ft</Typography>
                    </div>
                  </div>

                  <Typography variant="body2" className="text-gray-600 mb-4 line-clamp-2">
                    {property.description}
                  </Typography>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.slice(0, 3).map((feature, index) => (
                      <Chip
                        key={index}
                        label={feature}
                        size="small"
                        className="bg-gray-100 text-gray-700"
                      />
                    ))}
                  </div>

                  <Button
                    variant="contained"
                    color="primary"
                    className="w-full bg-primary-600 hover:bg-primary-700"
                  >
                    View Details
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Properties;
