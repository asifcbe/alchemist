import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const footerLinks = [
    {
      title: 'Policies',
      links: [
        { text: 'Shipping & Delivery', path: '/shipping-delivery' },
        { text: 'Refund & Cancellation Policy', path: '/refund-policy' },
        { text: 'Terms & Conditions', path: '/terms' },
        { text: 'Contact Us', path: '/contact' },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'transparent',
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
        mt: '30px',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {footerLinks.map((section) => (
            <Grid item xs={12} sm={6} md={4} key={section.title}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "'Cinzel Decorative', serif",
                  fontWeight: 700,
                  mb: 2,
                  textAlign: { xs: 'center', sm: 'left' },
                  fontSize: '1.1rem',
                  letterSpacing: '0.05em',
                  color: 'rgba(0, 0, 0, 0.87)',
                }}
              >
                {section.title}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'center', sm: 'flex-start' },
                  gap: 1.5,
                }}
              >
                {section.links.map((link) => (
                  <Link
                    key={link.text}
                    component="button"
                    onClick={() => navigate(link.path)}
                    sx={{
                      color: 'rgba(0, 0, 0, 0.6)',
                      textDecoration: 'none',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1rem',
                      textAlign: 'left',
                      transition: 'all 0.3s ease',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'rgba(0, 0, 0, 0.87)',
                        textDecoration: 'none',
                        transform: 'translateX(5px)',
                      },
                    }}
                  >
                    {link.text}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography
          variant="body2"
          align="center"
          sx={{
            mt: 4,
            color: 'rgba(0, 0, 0, 0.6)',
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          © {new Date().getFullYear()} Al Chemist. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;