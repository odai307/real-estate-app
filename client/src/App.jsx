import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Home, Search, Favorite, Person } from '@mui/icons-material';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <AppBar position="sticky" className="bg-white shadow-md">
          <Toolbar className="justify-between">
            <div className="flex items-center">
              <Typography variant="h6" className="text-primary-600 font-bold">
                GhanaRealEstate
              </Typography>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6">
              <Button color="inherit" className="text-gray-700 hover:text-primary-600">
                <Home className="mr-1" /> Home
              </Button>
              <Button color="inherit" className="text-gray-700 hover:text-primary-600">
                <Search className="mr-1" /> Search
              </Button>
              <Button color="inherit" className="text-gray-700 hover:text-primary-600">
                <Favorite className="mr-1" /> Favorites
              </Button>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="contained" 
                color="primary"
                className="bg-primary-600 hover:bg-primary-700"
              >
                List Property
              </Button>
              <Button 
                color="inherit"
                className="text-gray-700 hover:text-primary-600"
              >
                <Person />
              </Button>
            </div>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

        {/* Footer */}
        <Box className="bg-gray-800 text-white py-8 mt-12">
          <Container maxWidth="lg">
            <div className="text-center text-gray-400">
              <Typography variant="body2">
                © 2024 GhanaRealEstate. All rights reserved.
              </Typography>
            </div>
          </Container>
        </Box>
      </div>
    </Router>
  );
}

export default App;
