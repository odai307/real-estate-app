-- Create a new user and grant privileges
CREATE USER IF NOT EXISTS 'realestate'@'localhost' IDENTIFIED BY 'realestate123';
GRANT ALL PRIVILEGES ON real_estate_db.* TO 'realestate'@'localhost';
FLUSH PRIVILEGES;

-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS real_estate_db;
USE real_estate_db;

-- Create properties table
CREATE TABLE IF NOT EXISTS properties (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO properties (title, location, price, image_url) VALUES
INSERT INTO properties (title, location, price, image_url) VALUES
('Modern Downtown Apartment', 'New York, NY', 450000.00, 'https://images.app.goo.gl/WbBgKBtsVFz8nX7w9'),
('Suburban Family Home', 'Los Angeles, CA', 750000.00, 'https://images.app.goo.gl/PuMYfwfFBbdFeSPH6'),
('Beachfront Condo', 'Miami, FL', 600000.00, 'https://images.app.goo.gl/mZjbkTLQGqEVdME18'),
('Mountain View Cabin', 'Denver, CO', 350000.00, 'https://images.app.goo.gl/b2QKfMyDSSPdjHUb6'),
('City Center Loft', 'Chicago, IL', 550000.00, 'https://images.app.goo.gl/jx3v5fjbFKiAdgch7'); 