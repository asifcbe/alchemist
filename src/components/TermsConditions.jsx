import React from 'react';
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  Divider,
  Paper,
  Link,
} from '@mui/material';
import {
  Info as InfoIcon,
  ShoppingCart as ShoppingCartIcon,
  Payment as PaymentIcon,
  Cancel as CancelIcon,
  LocalShipping as LocalShippingIcon,
  Replay as ReplayIcon,
  Copyright as CopyrightIcon,
  Gavel as GavelIcon,
  Warning as WarningIcon,
  Public as PublicIcon,
  Update as UpdateIcon,
  Email as EmailIcon,
} from '@mui/icons-material';

const TermsConditions = () => {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 3, sm: 5 } }}>
      <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 3 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: { xs: 3, sm: 5 }, fontWeight: 'bold', fontSize: { xs: '1.8rem', sm: '2.5rem' } }}
        >
          Terms and Conditions
        </Typography>

        <Box mb={{ xs: 3, sm: 5 }}>
          <Typography
            variant="h5"
            sx={{ display: 'flex', alignItems: 'center', mb: 2, fontSize: { xs: '1.2rem', sm: '1.5rem' } }}
          >
            <InfoIcon color="primary" sx={{ mr: 1 }} />
            Introduction
          </Typography>
          <Typography paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            Welcome to Al Chemist Perfumes. By accessing or using our website, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully before using our services.
          </Typography>
        </Box>

        <Box mb={{ xs: 3, sm: 5 }}>
          <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', mb: 2, fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
            <GavelIcon color="primary" sx={{ mr: 1 }} />
            Acceptance of Terms
          </Typography>
          <Typography paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            By using our website, you confirm that you are at least 18 years old and agree to these Terms and Conditions. If you do not agree, please do not use our website.
          </Typography>
        </Box>

        <Box mb={{ xs: 3, sm: 5 }}>
          <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', mb: 2, fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
            <ShoppingCartIcon color="primary" sx={{ mr: 1 }} />
            Orders and Payments
          </Typography>

          <Box mb={2}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1rem', sm: '1.1rem' } }}>
              <InfoIcon color="primary" sx={{ mr: 1 }} />
              Order Confirmation
            </Typography>
            <Typography paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              Once you place an order, you will receive an email confirming the details of your purchase.
            </Typography>
          </Box>

          <Box mb={2}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1rem', sm: '1.1rem' } }}>
              <PaymentIcon color="primary" sx={{ mr: 1 }} />
              Payment Methods
            </Typography>
            <Typography paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              We accept major credit/debit cards, UPI, and net banking. Cash on Delivery (COD) is also available with an additional shipping fee.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontSize: { xs: '1rem', sm: '1.1rem' } }}>
              <CancelIcon color="primary" sx={{ mr: 1 }} />
              No Cancellations
            </Typography>
            <Typography paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              Once an order is placed, it <strong>cannot be cancelled.</strong> Please review your order carefully before completing the purchase.
            </Typography>
          </Box>
        </Box>

        <Box mb={{ xs: 3, sm: 5 }}>
          <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', mb: 2, fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
            <LocalShippingIcon color="primary" sx={{ mr: 1 }} />
            Shipping and Delivery
          </Typography>
          <Typography paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            We aim to process and ship orders within <strong>1-2 business days</strong>. Delivery times may vary depending on your location and the availability of the product. For Cash on Delivery (COD) orders, an additional ₹100 will be charged as a shipping fee.
          </Typography>
        </Box>

        <Box mb={{ xs: 3, sm: 5 }}>
          <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', mb: 2, fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
            <ReplayIcon color="primary" sx={{ mr: 1 }} />
            Returns and Refunds
          </Typography>
          <Typography paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            <strong>Refund Policy:</strong> Refunds are only available for damaged or defective items. To be eligible for a refund, the item must be returned within <strong>7 days</strong> of the order date. Please refer to our{' '}
            <Link href="https://www.saliheenperfumes.com/refund-cancellation" underline="hover" color="primary" target="_blank" rel="noopener noreferrer">
              Refund & Cancellation Policy
            </Link>{' '}
            for more details.
          </Typography>
        </Box>

        <Box mb={{ xs: 3, sm: 5 }}>
          <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', mb: 2, fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
            <CopyrightIcon color="primary" sx={{ mr: 1 }} />
            Intellectual Property
          </Typography>
          <Typography paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            All content on this website, including text, images, logos, and designs, is the property of Al Chemist Perfumes and is protected by intellectual property laws. Unauthorized use of any content is strictly prohibited.
          </Typography>
        </Box>

        <Box mb={{ xs: 3, sm: 5 }}>
          <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', mb: 2, fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
            <WarningIcon color="primary" sx={{ mr: 1 }} />
            Limitation of Liability
          </Typography>
          <Typography paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            Al Chemist Perfumes shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or products.
          </Typography>
        </Box>

        <Box mb={{ xs: 3, sm: 5 }}>
          <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', mb: 2, fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
            <PublicIcon color="primary" sx={{ mr: 1 }} />
            Governing Law
          </Typography>
          <Typography paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be resolved in the courts of India.
          </Typography>
        </Box>

        <Box mb={{ xs: 3, sm: 5 }}>
          <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', mb: 2, fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
            <UpdateIcon color="primary" sx={{ mr: 1 }} />
            Changes to Terms
          </Typography>
          <Typography paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be posted on this page, and your continued use of the website constitutes acceptance of the updated terms.
          </Typography>
        </Box>

        <Divider sx={{ mb: { xs: 2, sm: 4 } }} />

        <Box>
          <Typography
            variant="h5"
            sx={{ display: 'flex', alignItems: 'center', mb: 2, fontSize: { xs: '1.2rem', sm: '1.5rem' } }}
          >
            <EmailIcon color="primary" sx={{ mr: 1 }} />
            Contact Us
          </Typography>
          <Typography paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            If you have any questions about these Terms and Conditions, please contact us at:
          </Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            <Link href="mailto:alchemistperfumes@gmail.com" underline="hover" color="primary">
              alchemistperfumes@gmail.com
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default TermsConditions;
