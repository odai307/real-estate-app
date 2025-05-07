# Real Estate Property Listing App

A full-stack web application for listing and viewing real estate properties.

## Features

- Property Listings page with responsive grid layout
- Property Details page
- Add New Property form
- Responsive design for all screen sizes
- Image upload and display
- Search and filter properties

## Tech Stack

- Frontend: React (Vite), Tailwind CSS, Material UI
- Backend: Node.js, Express.js
- Database: MySQL

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MySQL

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```
   PORT=5000
   DB_HOST=localhost
   DB_USER=realestate
   DB_PASSWORD=realestate123
   DB_NAME=real_estate_db
   ```

4. Initialize the database:
   ```bash
   npm run init-db
   ```

5. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the client directory:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
real-estate-app/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   └── App.jsx       # Main application component
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── src/
    │   ├── config/       # Database and environment configuration
    │   ├── controllers/  # Route controllers
    │   ├── models/       # Database models
    │   ├── routes/       # API routes
    │   └── index.js      # Server entry point
    └── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Testing

### Backend Testing
- Use Postman to test the API endpoints
- Test the following endpoints:
  - GET /api/properties
  - GET /api/properties/:id

### Frontend Testing
- Test the application on different devices and screen sizes
- Verify that property cards are clickable and navigate to details
- Check loading states and error handling

## Deployment

### Backend Deployment
1. Deploy to Railway or Render
2. Update environment variables
3. Test API endpoints

### Frontend Deployment
1. Build the application:
   ```bash
   npm run build
   ```
2. Deploy to Vercel
3. Update environment variables
4. Test the live application 