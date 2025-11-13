import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  Link,
} from '@mui/material';
import { Email as EmailIcon, Phone as PhoneIcon, LocationOn as LocationOnIcon } from '@mui/icons-material';

const ContactUs = () => {
  return (
    <Container maxWidth="sm" sx={{ py: { xs: 3, sm: 5 } }}>
      <Paper elevation={3} sx={{ p: { xs: 3, sm: 5 }, borderRadius: 3 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: { xs: 3, sm: 5 }, fontWeight: 'bold', fontSize: { xs: '1.8rem', sm: '2.5rem' } }}
        >
          Contact Us
        </Typography>

        <Box mb={{ xs: 3, sm: 5 }} display="flex" alignItems="center">
          <EmailIcon color="primary" sx={{ mr: 2, fontSize: 30 }} />
          <Typography sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>
            Email:{' '}
            <Link href="mailto:alchemistperfumes@gmail.com" underline="hover" color="primary" sx={{ fontWeight: 'bold' }}>
              alchemistperfumes@gmail.com
            </Link>
          </Typography>
        </Box>

        <Box mb={{ xs: 3, sm: 5 }} display="flex" alignItems="center">
          <PhoneIcon color="primary" sx={{ mr: 2, fontSize: 30 }} />
          <Typography sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>
            Phone: +91 12345 67890
          </Typography>
        </Box>

        <Box mb={{ xs: 4, sm: 6 }} display="flex" alignItems="center">
          <LocationOnIcon color="primary" sx={{ mr: 2, fontSize: 30 }} />
          <Typography sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>
            Address: 123 Al Chemist Road, Mumbai, India
          </Typography>
        </Box>

        <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
          Send us a message
        </Typography>

        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="dense"
            required
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="dense"
            type="email"
            required
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            margin="dense"
            multiline
            rows={4}
            required
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ContactUs;
