const db = require('../config/database');

class Property {
  static async getAll() {
    try {
      console.log('Attempting to fetch all properties...');
      const [rows] = await db.query('SELECT * FROM properties');
      console.log('Properties fetched successfully:', rows.length);
      return rows;
    } catch (error) {
      console.error('Error in Property.getAll:', error);
      throw new Error(`Failed to fetch properties: ${error.message}`);
    }
  }

  static async getById(id) {
    try {
      console.log('Attempting to fetch property with id:', id);
      const [rows] = await db.query('SELECT * FROM properties WHERE id = ?', [id]);
      console.log('Property fetch result:', rows[0] ? 'Found' : 'Not found');
      return rows[0];
    } catch (error) {
      console.error('Error in Property.getById:', error);
      throw new Error(`Failed to fetch property: ${error.message}`);
    }
  }
}

module.exports = Property; 