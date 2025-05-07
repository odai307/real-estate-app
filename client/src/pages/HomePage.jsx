import { useState, useEffect } from 'react';
import { Container, Typography, CircularProgress } from '@mui/material';
import PropertyList from '../components/PropertyList';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const HomePage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${API_URL}/properties`);
        setProperties(response.data.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch properties');
        console.error('Error fetching properties:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <Container className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-8">
        <Typography color="error" align="center">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h3" component="h1" className="py-8 text-center">
        Available Properties
      </Typography>
      <PropertyList properties={properties} />
    </Container>
  );
};

export default HomePage; 