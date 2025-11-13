import React from 'react';
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  Divider,
  Paper,
} from '@mui/material';
import {
  Info as InfoIcon,
  People as PeopleIcon,
  Payment as PaymentIcon,
  Computer as ComputerIcon,
  VerifiedUser as VerifiedUserIcon,
  Group as GroupIcon,
  Lock as LockIcon,
  Gavel as GavelIcon,
  Cookie as CookieIcon,
  ChangeCircle as ChangeCircleIcon,
  ContactMail as ContactMailIcon,
  ArrowRight as ArrowRightIcon,
} from '@mui/icons-material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" gutterBottom align="center" sx={{ mb: 5, fontWeight: 'bold' }}>
          Privacy Policy
        </Typography>

        <Box mb={5}>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <InfoIcon color="primary" sx={{ mr: 1 }} /> Introduction
          </Typography>
          <Typography paragraph>
            At Al Chemist Perfumes, your privacy and trust are our top priorities. This Privacy Policy explains how we collect, use,
            and protect your personal information when you visit our website, browse our products, or make a purchase. By using our services,
            you agree to the terms described below.
          </Typography>
        </Box>

        <Box mb={5}>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <PeopleIcon color="primary" sx={{ mr: 1 }} /> Information We Collect
          </Typography>

          <Box mb={3}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <ArrowRightIcon fontSize="small" color="primary" sx={{ mr: 1 }} /> Personal Information
            </Typography>
            <Typography paragraph>
              We may collect personal details such as your name, email address, phone number, and shipping address to process your orders
              and provide customer support.
            </Typography>
          </Box>

          <Box mb={3}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <PaymentIcon fontSize="small" color="primary" sx={{ mr: 1 }} /> Payment Information
            </Typography>
            <Typography paragraph>
              When you make a purchase, we collect necessary payment information such as your credit/debit card number or other payment details
              through secure, compliant payment gateways.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <ComputerIcon fontSize="small" color="primary" sx={{ mr: 1 }} /> Technical Information
            </Typography>
            <Typography paragraph>
              When you visit our website, we may collect data such as your IP address, browser type, operating system, and browsing history
              to enhance user experience and improve site performance.
            </Typography>
          </Box>
        </Box>

        <Box mb={5}>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <VerifiedUserIcon color="primary" sx={{ mr: 1 }} /> How We Use Your Information
          </Typography>
          <List>
            {[
              'To process and deliver your orders accurately.',
              'To communicate with you about purchases, orders, or customer inquiries.',
              'To personalize and improve your shopping experience.',
              'To send you promotional messages or offers, with your consent.',
              'To meet legal and regulatory obligations.',
            ].map((text, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <ArrowRightIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box mb={5}>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <LockIcon color="primary" sx={{ mr: 1 }} /> Data Security
          </Typography>
          <Typography paragraph>
            Your security is important to us. We implement advanced security measures and encryption protocols to protect your personal
            data from unauthorized access, alteration, disclosure, or destruction. Please note that no electronic transmission or storage
            method is completely secure.
          </Typography>
        </Box>

        <Box mb={5}>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <GroupIcon color="primary" sx={{ mr: 1 }} /> Third-Party Services
          </Typography>
          <Typography paragraph>
            We may work with trusted third-party service providers such as payment processors, logistics companies, and marketing tools.
            These partners only access your information to perform specific tasks on our behalf and are contractually bound to maintain
            confidentiality and security.
          </Typography>
        </Box>

        <Box mb={5}>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <GavelIcon color="primary" sx={{ mr: 1 }} /> Your Rights
          </Typography>
          <List>
            {[
              'You can update, correct, or delete your personal information at any time.',
              'You can opt out of receiving promotional communications by following the unsubscribe link in our emails.',
              'You can request a copy of the data we hold about you by contacting us directly.',
            ].map((text, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <ArrowRightIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box mb={5}>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <CookieIcon color="primary" sx={{ mr: 1 }} /> Cookies and Tracking
          </Typography>
          <Typography paragraph>
            Our website uses cookies to improve user experience, analyze website performance, and provide personalized recommendations.
            You can manage or disable cookies through your browser settings.
          </Typography>
        </Box>

        <Box mb={5}>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <ChangeCircleIcon color="primary" sx={{ mr: 1 }} /> Changes to This Policy
          </Typography>
          <Typography paragraph>
            We may revise this Privacy Policy periodically. Any updates will be posted on this page with a revised “Last Updated” date.
            For significant changes, we may notify you via email or a site notice.
          </Typography>
        </Box>

        <Divider sx={{ mb: 4 }} />

        <Box mb={3}>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <ContactMailIcon color="primary" sx={{ mr: 1 }} /> Contact Us
          </Typography>
          <Typography paragraph>
            If you have any questions or requests regarding this Privacy Policy, please reach out to us at:
          </Typography>
          <Typography>
            <strong>Email:</strong>{' '}
            <Link href="mailto:alchemistperfumes@gmail.com" underline="hover" color="primary">
              alchemistperfumes@gmail.com
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;
