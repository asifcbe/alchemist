import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, Box, Container } from '@mui/material';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Products from './components/Products';
import { CartProvider } from './context/CartContext';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import UserOrders from './components/UserOrders';
import AdminDashboard from './components/AdminDashboard';
import PrivacyPolicy from './components/PrivacyPolicy';
import ShippingDelivery from './components/ShippingDelivery';
import RefundCancellation from './components/RefundCancellation';
import TermsConditions from './components/TermsConditions';
import ContactUs from './components/ContactUs';

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
      <AuthProvider>
        <CartProvider>
          <Router>
            <div className='app'>
            <Box 
              sx={{ 
                minHeight: '100vh', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center'  // Center entire app horizontally
              }}
            >
              <Navbar />
              <Box 
                component="main" 
                sx={{ 
                  pt: { xs: '56px', sm: '64px' },
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center' // Center main content horizontally
                }}
              >
                <Container 
                  maxWidth="lg" 
                  sx={{ 
                    flex: 1, 
                    px: { xs: 2, sm: 3, md: 4 }, 
                    marginX: 'auto', 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center' // Make inner container content centered too
                  }}
                >
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/my-orders" element={<UserOrders />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/shipping-delivery" element={<ShippingDelivery/>} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                    <Route path="/refund-policy" element={<RefundCancellation/>} />
                    <Route path="/terms" element={<TermsConditions/>} />
                    <Route path="/contact" element={<ContactUs/>} />
                  </Routes>
                </Container>
                <Footer />
              </Box>
            </Box>
            </div>
          </Router>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
