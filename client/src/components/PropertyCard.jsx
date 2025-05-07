import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const PropertyCard = ({ property, onClick }) => {
  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-shadow duration-300 h-[320px] w-full flex flex-col"
      onClick={() => onClick(property.id)}
    >
      <CardMedia
        component="img"
        height="140"
        width="100%"
        className="w-full object-cover"
        image={property.image_url || 'https://via.placeholder.com/300x200'}
        alt={property.title}
        sx={{ aspectRatio: '16/9' }}
      />
      <CardContent className="flex-grow p-4">
        <Typography 
          gutterBottom 
          variant="subtitle1" 
          component="div"
          className="line-clamp-2 mb-2 font-medium"
          sx={{ 
            fontSize: { xs: '0.875rem', sm: '1rem' },
            lineHeight: 1.2
          }}
        >
          {property.title}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary"
          className="line-clamp-1 mb-2"
          sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
        >
          {property.location}
        </Typography>
        <Typography 
          variant="subtitle1" 
          color="primary" 
          className="mt-auto"
          sx={{ 
            fontSize: { xs: '0.875rem', sm: '1rem' },
            fontWeight: 'bold'
          }}
        >
          ${property.price.toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PropertyCard; 