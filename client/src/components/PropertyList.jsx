import { Grid, Container, Typography } from '@mui/material';
import PropertyCard from './PropertyCard';
import { useNavigate } from 'react-router-dom';

const PropertyList = ({ properties }) => {
  const navigate = useNavigate();

  const handlePropertyClick = (id) => {
    navigate(`/property/${id}`);
  };

  if (!properties.length) {
    return (
      <Container className="py-8">
        <Typography variant="h6" align="center">
          No properties found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" className="py-8">
      <Grid container spacing={3}>
        {properties.map((property) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={property.id}>
            <PropertyCard
              property={property}
              onClick={handlePropertyClick}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PropertyList; 