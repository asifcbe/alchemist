import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Button
} from '@mui/material';
import Carousel from './Carousel';
import { useNavigate } from 'react-router-dom';

// Image imports remain unchanged
import image1 from '../assets/perfumehistory/1.jpg';
import image2 from '../assets/perfumehistory/2.jpg';
import image3 from '../assets/perfumehistory/3.jpg';
import image4 from '../assets/perfumehistory/4.jpg';
import image5 from '../assets/perfumehistory/5.jpg';
import image6 from '../assets/perfumehistory/6.jpg';
import image7 from '../assets/perfumehistory/7.jpg';
import image8 from '../assets/perfumehistory/8.jpg';
import image9 from '../assets/perfumehistory/9.jpg';
import image10 from '../assets/perfumehistory/10.jpg';
import Quotes from './Quotes';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const randomPhotos = [
    {
      id: '1',
      imageUrl: image1,
      name: 'Luxury Fragrance Collection',
      description: 'Experience the essence of elegance'
    },
    {
      id: '2',
      imageUrl: image2,
      name: 'Artisan Crafted Scents',
      description: 'Handcrafted with precision and passion'
    },
    {
      id: '3',
      imageUrl: image3,
      name: 'Premium Ingredients',
      description: "Sourced from nature's finest resources"
    },
    {
      id: '4',
      imageUrl: image4,
      name: 'Signature Blends',
      description: 'Unique combinations for unforgettable moments'
    }
  ];

  const historyTimeline = [
    {
      period: "Ancient Origins",
      year: "3000 BC",
      description: "The earliest recorded perfumes originate from ancient Mesopotamia and Egypt, where they were used in religious ceremonies and burial rituals.",
      image: image6,
      color: "#f5f5f5"
    },
    {
      period: "Islamic Golden Age",
      year: "800 AD",
      description: "Persian chemist Al-Kindi wrote the Book of the Chemistry of Perfume and Distillations, documenting 107 recipes for perfumes.",
      image: image7,
      color: "#e0e0e0"
    },
    {
      period: "Renaissance Europe",
      year: "14th Century",
      description: "Perfume making flourished in Renaissance Europe, particularly in France, where Grasse became the perfume capital of the world.",
      image: image8,
      color: "#f5f5f5"
    },
    {
      period: "Modern Perfumery",
      year: "19th Century",
      description: "The development of synthetic chemistry allowed for new fragrance compounds, revolutionizing perfume creation and making fine fragrances more accessible.",
      image: image9,
      color: "#e0e0e0"
    }
  ];

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      // Currently sets fallback photos
      setFeaturedProducts(randomPhotos);
    };

    fetchFeaturedProducts();
  }, []);

  // Navigate to shop page
  const goToShop = () => {
    navigate('/products');
  };

  return (
    <Box sx={{ bgcolor: 'white' }}>
      {/* Carousel Section */}
      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: 'white', textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Carousel 
            items={featuredProducts} 
            onImageClick={goToShop} // Pass handler to Carousel (update Carousel accordingly)
          />
          <Button
            variant="contained"
            size="large"
            onClick={goToShop}
            sx={{
              mt: 4,
              bgcolor: 'black',
              color: 'white',
              textTransform: 'none',
              fontSize: '1.2rem',
              px: 5,
              py: 1.5,
              borderRadius: 2,
              '&:hover': { bgcolor: '#333' },
            }}
          >
            Shop Now
          </Button>
        </Container>
      </Box>
<Quotes/>
      {/* History Timeline Section */}
      <Box sx={{ bgcolor: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 2, color: 'black', fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 300, letterSpacing: 2 }}>
            Journey Through Time
          </Typography>
          <Typography variant="h6" sx={{ textAlign: 'center', mb: 8, color: 'grey.600', fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 300, maxWidth: '600px', mx: 'auto' }}>
            The evolution of perfumery across centuries and civilizations
          </Typography>

          {/* Timeline with clickable images */}
          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                position: 'absolute',
                left: { xs: '20px', md: '50%' },
                top: 0,
                bottom: 0,
                width: '2px',
                bgcolor: 'grey.300',
                transform: { xs: 'none', md: 'translateX(-1px)' }
              }}
            />
            
            {historyTimeline.map((era, index) => (
              <Grid
                container
                key={index}
                sx={{
                  position: 'relative',
                  mb: 8,
                  alignItems: 'center',
                  flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: '20px', md: '50%' },
                    top: { xs: 0, md: '50%' },
                    width: 16,
                    height: 16,
                    bgcolor: 'black',
                    borderRadius: '50%',
                    border: '4px solid white',
                    transform: {
                      xs: 'translateX(-7px)',
                      md: 'translateX(-8px) translateY(-50%)',
                    },
                    zIndex: 2
                  }}
                />

                {/* Content */}
                <Grid
                  item xs={12} md={5}
                  sx={{
                    mb: { xs: 2, md: 0 },
                    mr: { xs: 0, md: index % 2 === 0 ? 0 : 'auto' },
                    ml: { xs: 0, md: index % 2 === 0 ? 'auto' : 0 },
                    order: { xs: 2, md: index % 2 === 0 ? 1 : 2 }
                  }}
                >
                  <Card
                    sx={{
                      bgcolor: era.color,
                      border: '1px solid',
                      borderColor: 'grey.200',
                      borderRadius: 2,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      height: '100%',
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h4" sx={{ color: 'black', mb: 1, fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 400 }}>
                        {era.period}
                      </Typography>
                      <Typography variant="h6" sx={{ color: 'grey.600', mb: 2, fontSize: '1.1rem', fontWeight: 300 }}>
                        {era.year}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'grey.700', lineHeight: 1.6 }}>
                        {era.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Clickable Image */}
                <Grid
                  item xs={12} md={5}
                  sx={{
                    order: { xs: 1, md: index % 2 === 0 ? 2 : 1 },
                    mb: { xs: 2, md: 0 },
                    cursor: 'pointer',
                    "&:hover img": { transform: 'scale(1.05)', transition: 'transform 0.3s ease' }
                  }}
                  onClick={goToShop}
                  aria-label={`Shop related to ${era.period}`}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: { xs: '250px', md: '300px' },
                      borderRadius: 2,
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                      border: '1px solid',
                      borderColor: 'grey.100',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <img
                      src={era.image}
                      alt={era.period}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Modern Era Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8, borderTop: '1px solid', borderColor: 'grey.200' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: '100%',
                  height: { xs: '300px', md: '500px' },
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
                }}
              >
                <img
                  src={image10}
                  alt="Modern Perfumery"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ color: 'black', mb: 3, fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 300 }}>
                The Modern Era
              </Typography>
              <Typography variant="body1" sx={{ color: 'grey.700', mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
                Today, perfumery stands at the intersection of tradition and innovation. While we honor ancient
                techniques and natural ingredients, we also embrace cutting-edge technology and sustainable practices.
              </Typography>
              <Typography variant="body1" sx={{ color: 'grey.700', lineHeight: 1.8, fontSize: '1.1rem' }}>
                At Al Chemist, we continue this legacy by creating fragrances that respect the past while looking
                toward the future—each bottle containing not just a scent, but a story centuries in the making.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
