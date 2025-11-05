import { useState, useEffect } from 'react';
import { Box, Typography, Container, Paper, Grid, Card, CardContent, useTheme, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Random photos for fallback
  const randomPhotos = [
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      name: 'Luxury Fragrance Collection',
      description: 'Experience the essence of elegance'
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1590736969955-71ac4460bd2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      name: 'Artisan Crafted Scents',
      description: 'Handcrafted with precision and passion'
    },
    {
      id: '3',
      imageUrl: 'https://images.unsplash.com/photo-1595425877381-1d835b6c41d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      name: 'Premium Ingredients',
      description: 'Sourced from nature\'s finest resources'
    },
    {
      id: '4',
      imageUrl: 'https://images.unsplash.com/photo-1615634260167-0462f12401ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      name: 'Signature Blends',
      description: 'Unique combinations for unforgettable moments'
    }
  ];

  // History timeline data
  const historyTimeline = [
    {
      period: "Ancient Origins",
      year: "3000 BC",
      description: "The earliest recorded perfumes originate from ancient Mesopotamia and Egypt, where they were used in religious ceremonies and burial rituals.",
      image: "https://images.unsplash.com/photo-1540555700478-4f2893cf7c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "#f5f5f5"
    },
    {
      period: "Islamic Golden Age",
      year: "800 AD",
      description: "Persian chemist Al-Kindi wrote the Book of the Chemistry of Perfume and Distillations, documenting 107 recipes for perfumes.",
      image: "https://images.unsplash.com/photo-1584556818267-5b23b7ed2f97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "#e0e0e0"
    },
    {
      period: "Renaissance Europe",
      year: "14th Century",
      description: "Perfume making flourished in Renaissance Europe, particularly in France, where Grasse became the perfume capital of the world.",
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "#f5f5f5"
    },
    {
      period: "Modern Perfumery",
      year: "19th Century",
      description: "The development of synthetic chemistry allowed for new fragrance compounds, revolutionizing perfume creation and making fine fragrances more accessible.",
      image: "https://images.unsplash.com/photo-1595425877381-1d835b6c41d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "#e0e0e0"
    }
  ];

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const productsRef = collection(db, 'products');
        const snapshot = await getDocs(productsRef);
        const products = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        const featured = products.filter(product => product.featured);
        
        setFeaturedProducts(featured.length > 0 ? featured : randomPhotos);
      } catch (error) {
        console.error('Error fetching products:', error);
        setFeaturedProducts(randomPhotos);
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
    autoplaySpeed: 4000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          adaptiveHeight: true
        }
      }
    ]
  };

  return (
    <Box sx={{ bgcolor: 'white' }}>
      {/* Hero Section with Carousel */}
      <Box sx={{ 
        height: { xs: '60vh', md: '80vh' }, 
        bgcolor: 'black', 
        color: 'white', 
        mb: 6,
        overflow: 'hidden'
      }}>
        <Slider {...sliderSettings}>
          {featuredProducts.map((product) => (
            <Box key={product.id} sx={{ 
              height: { xs: '60vh', md: '80vh' },
              position: 'relative',
              '&:focus': { outline: 'none' }
            }}>
              <img 
                src={product.imageUrl} 
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80';
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: '5%', md: '10%' },
                  left: { xs: '5%', md: '10%' },
                  right: { xs: '5%', md: 'auto' },
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  backgroundColor: { xs: 'rgba(0,0,0,0.5)', md: 'transparent' },
                  padding: { xs: 2, md: 0 },
                  borderRadius: { xs: 1, md: 0 }
                }}
              >
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.75rem' },
                    fontWeight: 'bold',
                    mb: 1
                  }}
                >
                  {product.name}
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                    fontWeight: 300
                  }}
                >
                  {product.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>

      {/* History Timeline Section */}
      <Box sx={{ bgcolor: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            sx={{ 
              textAlign: 'center',
              mb: 2,
              color: 'black',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 300,
              letterSpacing: 2
            }}
          >
            Journey Through Time
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              textAlign: 'center',
              mb: 8,
              color: 'grey.600',
              fontSize: { xs: '1rem', md: '1.25rem' },
              fontWeight: 300,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            The evolution of perfumery across centuries and civilizations
          </Typography>

          {/* Timeline */}
          <Box sx={{ position: 'relative' }}>
            {/* Vertical line */}
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
                {/* Timeline dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: '20px', md: '50%' },
                    top: { xs: 0, md: '50%' },
                    width: '16px',
                    height: '16px',
                    bgcolor: 'black',
                    borderRadius: '50%',
                    border: '4px solid white',
                    transform: { 
                      xs: 'translateX(-7px)', 
                      md: index % 2 === 0 ? 'translateX(-8px) translateY(-50%)' : 'translateX(-8px) translateY(-50%)' 
                    },
                    zIndex: 2
                  }}
                />

                {/* Content */}
                <Grid item xs={12} md={5} sx={{ 
                  mb: { xs: 2, md: 0 },
                  ml: { xs: 8, md: 0 },
                  mr: { xs: 0, md: index % 2 === 0 ? 0 : 'auto' },
                  ml: { xs: 0, md: index % 2 === 0 ? 'auto' : 0 },
                  order: { xs: 2, md: index % 2 === 0 ? 1 : 2 }
                }}>
                  <Card 
                    sx={{ 
                      bgcolor: era.color,
                      border: '1px solid',
                      borderColor: 'grey.200',
                      borderRadius: 2,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      height: '100%'
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography 
                        variant="h4" 
                        sx={{ 
                          color: 'black',
                          mb: 1,
                          fontSize: { xs: '1.5rem', md: '2rem' },
                          fontWeight: 400
                        }}
                      >
                        {era.period}
                      </Typography>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: 'grey.600',
                          mb: 2,
                          fontSize: '1.1rem',
                          fontWeight: 300
                        }}
                      >
                        {era.year}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'grey.700',
                          lineHeight: 1.6
                        }}
                      >
                        {era.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Image */}
                <Grid item xs={12} md={5} sx={{ 
                  order: { xs: 1, md: index % 2 === 0 ? 2 : 1 },
                  mb: { xs: 2, md: 0 }
                }}>
                  <Box
                    sx={{
                      width: '100%',
                      height: { xs: '250px', md: '300px' },
                      borderRadius: 2,
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                      border: '1px solid',
                      borderColor: 'grey.100'
                    }}
                  >
                    <img 
                      src={era.image} 
                      alt={era.period}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
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
                  src="https://images.unsplash.com/photo-1590736969955-71ac4460bd2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
              <Typography 
                variant="h3" 
                sx={{ 
                  color: 'black',
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 300
                }}
              >
                The Modern Era
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'grey.700',
                  mb: 3,
                  lineHeight: 1.8,
                  fontSize: '1.1rem'
                }}
              >
                Today, perfumery stands at the intersection of tradition and innovation. While we honor ancient 
                techniques and natural ingredients, we also embrace cutting-edge technology and sustainable practices.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'grey.700',
                  lineHeight: 1.8,
                  fontSize: '1.1rem'
                }}
              >
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