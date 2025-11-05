import { useState } from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Container, 
  Box,
  Button,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  Chip,
  Fade,
  Paper
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { products } from '../config/products';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

const Products = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, dispatch } = useCart();

  const isInCart = (productId) => {
    return cart.items.some(item => item.id === productId);
  };

  const handleAddToCart = (product) => {
    if (isInCart(product.id)) {
      setIsCartOpen(true);
      return;
    }
    
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...product,
        size: product.variants[0].size,
        price: product.variants[0].price,
        variantId: `${product.id}-${product.variants[0].size}`
      }
    });
    setIsCartOpen(true);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
        <Box>
          <Typography variant="h3" sx={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Our Collection
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
            Discover our exquisite range of handcrafted fragrances
          </Typography>
        </Box>
        <IconButton 
          onClick={() => setIsCartOpen(true)}
          sx={{ 
            bgcolor: 'black',
            color: 'white',
            '&:hover': {
              bgcolor: '#333'
            }
          }}
        >
          <ShoppingCartIcon />
        </IconButton>
      </Box>
      
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card 
              elevation={0} 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                overflow: 'hidden',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <CardMedia
                component="img"
                image={product.imageUrl}
                alt={product.name}
                sx={{ 
                  height: 300,
                  objectFit: 'cover'
                }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography variant="h5" component="h2" sx={{ fontFamily: "'Cormorant Garamond', serif", mb: 1 }}>
                  {product.name}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
                  {product.category}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {product.description}
                </Typography>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                  <Typography variant="h6">
                    From ${product.variants[0].price}
                  </Typography>
                  <Button 
                    variant={isInCart(product.id) ? "outlined" : "contained"}
                    startIcon={isInCart(product.id) ? <ShoppingCartIcon /> : null}
                    sx={{ 
                      bgcolor: isInCart(product.id) ? 'transparent' : 'black',
                      color: isInCart(product.id) ? 'black' : 'white',
                      borderColor: 'black',
                      '&:hover': {
                        bgcolor: isInCart(product.id) ? 'rgba(0,0,0,0.05)' : '#333',
                        borderColor: 'black'
                      }
                    }}
                    onClick={() => handleAddToCart(product)}
                  >
                    {isInCart(product.id) ? 'View Cart' : 'Add to Cart'}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Cart open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </Container>
  );
};

export default Products;