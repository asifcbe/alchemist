// src/components/AppLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const AppLayout = () => (
  <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Navbar />
    <Box
      component="main"
      sx={{
        pt: { xs: '56px', sm: '64px' },
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
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
          alignItems: 'center',
        }}
      >
        <Outlet />
      </Container>
    </Box>
    <Footer />
  </Box>
);

export default AppLayout;
