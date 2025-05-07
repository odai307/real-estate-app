const express = require('express');
const cors = require('cors');
const propertiesRouter = require('./routes/properties');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Define the root route
app.get('/', (req, res) => {
  res.send('Welcome to the Real Estate API');
});

// Use the properties router for the /properties path
app.use('/properties', propertiesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
