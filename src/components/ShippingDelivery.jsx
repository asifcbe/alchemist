import React from 'react';
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  Paper,
  Link,
} from '@mui/material';
import {
  LocalShipping as LocalShippingIcon,
  Payment as PaymentIcon,
  CurrencyRupee as CurrencyRupeeIcon,
  Info as InfoIcon,
  Email as EmailIcon,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon,
} from '@mui/icons-material';

const ShippingDelivery = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" gutterBottom align="center" sx={{ mb: 5, fontWeight: 'bold' }}>
          Shipping & Delivery
        </Typography>

        <Box mb={5}>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <LocalShippingIcon color="primary" sx={{ mr: 1 }} /> Fast and Reliable Shipping
          </Typography>
          <Typography paragraph>
            Al Chemist Perfumes offers fast and reliable shipping services with delivery typically taking{' '}
            <strong>3-7 days</strong> from the time of order. Delivery times may vary depending on your location.
          </Typography>
        </Box>

        <Box mb={5}>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <PaymentIcon color="primary" sx={{ mr: 1 }} /> Payment Options
          </Typography>

          <Box mb={3}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <ArrowRightIcon fontSize="small" color="primary" sx={{ mr: 1 }} /> Online Payment
            </Typography>
            <Typography paragraph>
              Enjoy <strong>free shipping</strong> on all orders paid online with Al Chemist Perfumes.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <CurrencyRupeeIcon fontSize="small" color="primary" sx={{ mr: 1 }} /> Cash on Delivery (COD)
            </Typography>
            <Typography paragraph>
              An additional <strong>₹100</strong> will be charged as a shipping fee for COD orders.
            </Typography>
          </Box>
        </Box>

        <Box mb={5}>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <InfoIcon color="primary" sx={{ mr: 1 }} /> Important Notes
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <Typography>
                For online payments, Al Chemist Perfumes accepts major credit/debit cards, UPI, and net banking.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <Typography>
                For Cash on Delivery, please ensure you have the exact amount ready when the delivery arrives.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocalShippingIcon color="primary" />
              </ListItemIcon>
              <Typography>
                Delivery typically takes <strong>3-7 days</strong> from the time of order, but may vary depending on your location and product availability.
              </Typography>
            </ListItem>
          </List>
        </Box>

        <Divider sx={{ mb: 4 }} />

        <Box>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <EmailIcon color="primary" sx={{ mr: 1 }} /> Contact Support
          </Typography>
          <Typography paragraph>
            For any issues related to shipping or delivery for Al Chemist Perfumes, please contact our support team at:
          </Typography>
          <Typography>
            <Link href="mailto:alchemistperfumes@gmail.com" underline="hover" color="primary" sx={{ fontWeight: 'bold' }}>
              alchemistperfumes@gmail.com
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default ShippingDelivery;
