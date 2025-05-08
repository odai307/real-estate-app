import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  CircularProgress, 
  Grid,
  Paper,
  Chip,
  Divider
} from '@mui/material';
import { 
  LocationOn, 
  Hotel, 
  Bathtub, 
  SquareFoot, 
  ArrowBack,
  Home,
  Apartment,
  Business
} from '@mui/icons-material';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const parseFeatures = (features) => {
    try {
      return typeof features === 'string' ? JSON.parse(features) : features;
    } catch (e) {
      // If parsing fails, assume it's a comma-separated string
      return features.split(',').map(f => f.trim());
    }
  };

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://real-estate-app-y47w.onrender.com/api/properties/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (result.success) {
          setProperty(result.data);
        } else {
          throw new Error(result.error || 'Failed to fetch property');
        }
      } catch (error) {
        console.error('Error fetching property:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" className="py-8">
        <div className="text-center text-red-500">
          <Typography variant="h5" className="font-bold mb-2">
            Error loading property
          </Typography>
          <Typography>{error}</Typography>
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate('/')}
            className="mt-4"
          >
            Back to Listings
          </Button>
        </div>
      </Container>
    );
  }

  if (!property) {
    return (
      <Container maxWidth="lg" className="py-8">
        <div className="text-center">
          <Typography variant="h5" className="font-bold mb-4">
            Property not found
          </Typography>
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate('/')}
          >
            Back to Listings
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" className="py-8">
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate('/')}
        className="mb-6"
      >
        Back to Listings
      </Button>

      <Paper elevation={3} className="p-6">
        {/* Property Images */}
        <Box className="mb-8">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </Box>

        {/* Property Title and Price */}
        <Box className="mb-6">
          <Typography variant="h4" className="font-bold mb-2">
            {property.title}
          </Typography>
          <Typography variant="h5" className="text-primary-600 font-bold">
            ${property.price.toLocaleString()}
          </Typography>
        </Box>

        {/* Location */}
        <Box className="flex items-center text-gray-600 mb-6">
          <LocationOn className="mr-2" />
          <Typography variant="h6">
            {property.location}
          </Typography>
        </Box>

        {/* Key Features */}
        <Grid container spacing={4} className="mb-8">
          <Grid item xs={6} md={3}>
            <Box className="flex items-center">
              <Hotel className="mr-2 text-primary-600" />
              <Typography>{property.bedrooms} Bedrooms</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box className="flex items-center">
              <Bathtub className="mr-2 text-primary-600" />
              <Typography>{property.bathrooms} Bathrooms</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box className="flex items-center">
              <SquareFoot className="mr-2 text-primary-600" />
              <Typography>{property.area} sq ft</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box className="flex items-center">
              <Home className="mr-2 text-primary-600" />
              <Typography>{property.type}</Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider className="my-6" />

        {/* Description */}
        <Box className="mb-8">
          <Typography variant="h6" className="font-semibold mb-4">
            Description
          </Typography>
          <Typography variant="body1" className="text-gray-700">
            {property.description}
          </Typography>
        </Box>

        {/* Features */}
        <Box className="mb-8">
          <Typography variant="h6" className="font-semibold mb-4">
            Features
          </Typography>
          <div className="flex flex-wrap gap-2">
            {parseFeatures(property.features).map((feature, index) => (
              <Chip
                key={index}
                label={feature}
                className="bg-gray-100"
              />
            ))}
          </div>
        </Box>
      </Paper>
    </Container>
  );
};

export default PropertyDetails; 