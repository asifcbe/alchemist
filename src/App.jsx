import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, Box } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Products from './components/Products';
import { CartProvider } from './context/CartContext';

// Create a black and white theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 500,
    },
    body1: {
      fontFamily: "'Montserrat', sans-serif",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Router>
          <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Box 
              component="main" 
              sx={{ 
                pt: { xs: '56px', sm: '64px' },
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Box sx={{ flex: 1, px: { xs: 2, sm: 3, md: 4 } }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/shipping-delivery" element={<div>Shipping & Delivery</div>} />
                  <Route path="/refund-policy" element={<div>Refund & Cancellation Policy</div>} />
                  <Route path="/terms" element={<div>Terms & Conditions</div>} />
                  <Route path="/contact" element={<div>Contact Us</div>} />
                </Routes>
              </Box>
              <Footer />
            </Box>
          </Box>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
