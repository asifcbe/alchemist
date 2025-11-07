// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/config.js';
import { onAuthStateChanged } from 'firebase/auth';

// Create AuthContext
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for auth state changes (login/logout)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Cleanup listener on unmount
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Hook for easy use of AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
