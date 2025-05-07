const express = require('express');
const router = express.Router();

const mockProperties = [
  {
    id: 1,
    title: "Modern 3-Bedroom Home",
    location: "East Legon, Accra",
    price: 150000
  },
  {
    id: 2,
    title: "Cozy 2-Bedroom Apartment",
    location: "Osu, Accra",
    price: 95000
  }
];

router.get('/', (req, res) => {
  res.json(mockProperties);
});

module.exports = router;
