import { useState, useEffect } from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const productsRef = collection(db, 'products');
        const snapshot = await getDocs(productsRef);
        const products = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFeaturedProducts(products.filter(product => product.featured));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box>
      {/* Hero Section with Carousel */}
      <Box sx={{ height: '80vh', bgcolor: 'black', color: 'white', mb: 6 }}>
        <Slider {...sliderSettings}>
          {featuredProducts.map((product) => (
            <Box key={product.id} sx={{ height: '80vh', position: 'relative' }}>
              <img 
                src={product.imageUrl} 
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '10%',
                  left: '10%',
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}
              >
                <Typography variant="h2">{product.name}</Typography>
                <Typography variant="h5">{product.description}</Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>

      {/* History Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h3" sx={{ mb: 4, textAlign: 'center' }}>
          The Art of Perfumery
        </Typography>
        <Paper elevation={0} sx={{ p: 4, bgcolor: 'background.paper' }}>
          <Typography variant="body1" paragraph>
            The art of perfumery has been practiced for thousands of years, with ancient civilizations in Egypt, 
            Mesopotamia, and the Indus Valley being among the first to create fragrances. These early perfumes 
            were made from natural ingredients like flowers, spices, and resins.
          </Typography>
          <Typography variant="body1" paragraph>
            At Al Chemist, we continue this ancient tradition with a modern approach. Our master perfumers blend 
            the finest ingredients from around the world to create unique, sophisticated fragrances that tell a story 
            and leave a lasting impression.
          </Typography>
          <Typography variant="body1">
            Each of our perfumes is carefully crafted in our atelier, where science meets artistry, 
            and tradition meets innovation. We believe that a perfume is more than just a scent—it's 
            a form of self-expression, a invisible accessory that completes your presence.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;