import React, { useState, useEffect } from 'react';
import {
  Box, Typography, TextField, Button, Paper, Container
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle, signInWithPassword, signUpWithEmailAndPassword } from '../firebase/config.js';
import GoogleIcon from '@mui/icons-material/Google';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate('/'); // redirect if logged in
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await signUpWithEmailAndPassword(email, password);
      } else {
        await signInWithPassword(email, password);
      }
      // On success, currentUser will update and redirect happens in useEffect
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Paper elevation={0} sx={{ p: 4, width: '100%', maxWidth: 400 }}>
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            {isSignUp ? 'Sign Up' : 'Login'}
          </Typography>
          {error && (
            <Typography color="error" align="center" gutterBottom>
              {error}
            </Typography>
          )}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'black' }}
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={handleGoogleSignIn}
              sx={{
                mb: 2,
                textTransform: 'none',
                borderColor: '#4285F4',
                color: '#4285F4',
                ':hover': {
                  bgcolor: '#e8f0fe',
                  borderColor: '#4285F4',
                },
              }}
            >
              Continue with Google
            </Button>
            <Button
              fullWidth
              variant="text"
              onClick={() => {
                setError('');
                setIsSignUp(!isSignUp);
              }}
              sx={{ color: 'black' }}
            >
              {isSignUp
                ? 'Already have an account? Sign In'
                : "Don't have an account? Sign Up"}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
