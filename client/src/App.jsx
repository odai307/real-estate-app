<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
=======
import './App.css'
import Properties from './components/Properties'

function App() {
  

  return (
     <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Property Listings</h1>
      <Properties />
    </div>
  )
}

export default App
>>>>>>> 534f21d01292469ed7bf4d5b28a1532424d991b4
