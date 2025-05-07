const Property = require('../models/Property');

exports.getAllProperties = async (req, res) => {
  try {
    console.log('getAllProperties: Attempting to fetch properties...');
    const properties = await Property.getAll();
    console.log('getAllProperties: Successfully fetched properties:', properties.length);
    res.json({
      success: true,
      data: properties
    });
  } catch (error) {
    console.error('getAllProperties: Error fetching properties:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server Error'
    });
  }
};

exports.getPropertyById = async (req, res) => {
  try {
    console.log('getPropertyById: Attempting to fetch property with id:', req.params.id);
    const property = await Property.getById(req.params.id);
    if (!property) {
      console.log('getPropertyById: Property not found with id:', req.params.id);
      return res.status(404).json({
        success: false,
        error: 'Property not found'
      });
    }
    console.log('getPropertyById: Successfully fetched property:', property.id);
    res.json({
      success: true,
      data: property
    });
  } catch (error) {
    console.error('getPropertyById: Error fetching property:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Server Error'
    });
  }
}; 