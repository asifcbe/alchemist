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
  Gavel as GavelIcon,
  Cancel as CancelIcon,
  ReportProblem as ReportProblemIcon,
  Restore as RestoreIcon,
  Email as EmailIcon,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon,
} from '@mui/icons-material';

const RefundCancellation = () => {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 3, sm: 5 } }}>
      <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 3 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: { xs: 3, sm: 5 }, fontWeight: 'bold', fontSize: { xs: '1.8rem', sm: '2.5rem' } }}
        >
          Refund & Cancellation Policy
        </Typography>

        <Box mb={{ xs: 3, sm: 5 }}>
          <Typography
            variant="h5"
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
            }}
          >
            <GavelIcon color="primary" sx={{ mr: 1 }} />
            Introduction
          </Typography>
          <Typography paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            At Al Chemist Perfumes, we strive to ensure your complete satisfaction with every purchase. Please read our Refund & Cancellation Policy carefully
            to understand your rights and responsibilities.
          </Typography>
        </Box>

        <Box mb={{ xs: 3, sm: 5 }}>
          <Typography
            variant="h5"
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
            }}
          >
            <CancelIcon color="primary" sx={{ mr: 1 }} />
            No Cancellations After Ordering
          </Typography>
          <Typography paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            <strong>Important Note:</strong> Once an order is placed with Al Chemist Perfumes, it{' '}
            <strong>cannot be cancelled.</strong> Please review your order carefully before completing the purchase.
          </Typography>
        </Box>

        <Box mb={{ xs: 3, sm: 5 }}>
          <Typography
            variant="h5"
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
            }}
          >
            <ReportProblemIcon color="primary" sx={{ mr: 1 }} />
            Refund Policy
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                Damaged or Defective Items are eligible for a full refund if returned within <strong>7 days</strong> of the order date.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RestoreIcon color="primary" />
              </ListItemIcon>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                Refunds are <strong>not available</strong> for non-damaged items or items returned after 7 days.
              </Typography>
            </ListItem>
          </List>
        </Box>

        <Box mb={{ xs: 3, sm: 5 }}>
          <Typography
            variant="h5"
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
            }}
          >
            <ArrowRightIcon color="primary" sx={{ mr: 1 }} />
            Refund Process
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon color="primary" />
              </ListItemIcon>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                Contact our support team at{' '}
                <Link href="mailto:alchemistperfumes@gmail.com" underline="hover" color="primary" sx={{ fontWeight: 'bold' }}>
                  alchemistperfumes@gmail.com
                </Link>{' '}
                within 7 days of receiving the damaged item.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon color="primary" />
              </ListItemIcon>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                Provide your order number, photos of the damaged item, and a brief description of the issue.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon color="primary" />
              </ListItemIcon>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                Once your request is approved, you will receive instructions on how to return the item.
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon color="primary" />
              </ListItemIcon>
              <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                After we receive and inspect the returned item, your refund will be processed within <strong>5-7 business days</strong>.
              </Typography>
            </ListItem>
          </List>
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
            If you have any questions about our Refund & Cancellation Policy, please contact us at:
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

export default RefundCancellation;
