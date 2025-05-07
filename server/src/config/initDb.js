const mysql = require('mysql2/promise');
require('dotenv').config();

async function initializeDatabase() {
  try {
    // Create connection without database
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: 'realestate',
      password: 'realestate123'
    });

    console.log('Connected to MySQL server');

    // Create database
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME || 'real_estate_db'}`);
    console.log('Database created or already exists');

    // Use the database
    await connection.query(`USE ${process.env.DB_NAME || 'real_estate_db'}`);

    // Create properties table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS properties (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        image_url VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    console.log('Properties table created or already exists');

    // Insert sample data
    const [rows] = await connection.query('SELECT COUNT(*) as count FROM properties');
    if (rows[0].count === 0) {
      await connection.query(`
        INSERT INTO properties (title, location, price, image_url) VALUES
        ('Modern Downtown Apartment', 'New York, NY', 450000.00, 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'),
        ('Suburban Family Home', 'Los Angeles, CA', 750000.00, 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6'),
        ('Beachfront Condo', 'Miami, FL', 600000.00, 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688'),
        ('Mountain View Cabin', 'Denver, CO', 350000.00, 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8'),
        ('City Center Loft', 'Chicago, IL', 550000.00, 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6')
      `);
      console.log('Sample data inserted');
    }

    await connection.end();
    console.log('Database initialization completed');
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
}

initializeDatabase(); 