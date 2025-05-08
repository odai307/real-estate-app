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
        const response = await fetch('https://real-estate-app-y47w.onrender.com/api/properties');
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
        <div className="flex flex-wrap justify-center max-w-7xl mx-auto">
          {properties.map((property) => (
            <Card key={property.id} className="shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-[400px] m-4">
              <div className="flex flex-col">
                <CardMedia
                  component="img"
                  className="w-full h-12 object-cover"
                  image={property.image}
                  alt={property.title}
                />
                <CardContent className="p-3">
                  <div className="flex justify-between items-start mb-1">
                    <Typography variant="subtitle1" className="font-semibold">
                      {property.title}
                    </Typography>
                    <Typography variant="subtitle1" className="text-primary-600 font-bold">
                      ${property.price.toLocaleString()}
                    </Typography>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <LocationOn className="text-xs mr-1" />
                    <Typography variant="body2" className="text-sm">
                      {property.location}
                    </Typography>
                  </div>

                  <div className="flex items-center space-x-3 mb-2 text-gray-600">
                    <div className="flex items-center">
                      <Hotel className="text-xs mr-1" />
                      <Typography variant="body2" className="text-sm">{property.bedrooms}</Typography>
                    </div>
                    <div className="flex items-center">
                      <Bathtub className="text-xs mr-1" />
                      <Typography variant="body2" className="text-sm">{property.bathrooms}</Typography>
                    </div>
                    <div className="flex items-center">
                      <SquareFoot className="text-xs mr-1" />
                      <Typography variant="body2" className="text-sm">{property.area}</Typography>
                    </div>
                  </div>

                  <Typography variant="body2" className="text-gray-600 mb-2 line-clamp-1 text-sm">
                    {property.description}
                  </Typography>

                  <div className="flex flex-wrap gap-1 mb-2">
                    {property.features.slice(0, 2).map((feature, index) => (
                      <Chip
                        key={index}
                        label={feature}
                        size="small"
                        className="bg-gray-100 text-gray-700 text-xs"
                      />
                    ))}
                  </div>

                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-sm"
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
