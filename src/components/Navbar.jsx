import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Container,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Store, Login, Logout } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import alchemistLogo from "../assets/alchemistlogosc.png";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase/config.js";
import { signOut } from "firebase/auth";
import Cart from "./Cart";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      handleMenuClose();
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleMyOrders = () => {
    handleMenuClose();
    navigate("/my-orders");
  };

  const handleAdminDashboard = () => {
    handleMenuClose();
    navigate("/admin");
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          width: "100%",
          overflowX: "hidden",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(8px)",
        }}
      >
        <Container maxWidth="lg" disableGutters sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: "56px", sm: "64px" },
              py: { xs: 0.5, sm: 1 },
              gap: { xs: 1, sm: 2 },
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            {/* Logo & Title */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": { opacity: 0.9 },
                flex: { xs: "0 1 auto", sm: "0 0 auto" },
              }}
              onClick={() => navigate("/")}
            >
              <img
                src={alchemistLogo}
                alt="Al Chemist Logo"
                style={{
                  height: "80px",
                  marginRight: "8px",
                  width: "auto",
                  borderRadius: "50%",
                }}
              />
              {/* <Typography
                sx={{
                  fontFamily: "'Cinzel Decorative', 'Cormorant Garamond', serif",
                  fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" },
                  letterSpacing: { xs: "0.1em", sm: "0.15em" },
                  background: "linear-gradient(45deg, #1a1a1a 30%, #4a4a4a 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                Al-Chemist
              </Typography> */}
            </Box>

            {/* User & Shop & Cart */}
            <Box
              sx={{
                display: "flex",
                gap: { xs: 1, sm: 2 },
                alignItems: "center",
              }}
            >
              {/* Shop Button */}
              <Box
                onClick={() => navigate("/products")}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                  "&:hover": {
                    "& .MuiIconButton-root": { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                    "& .MuiTypography-root": { color: "rgba(0, 0, 0, 0.7)" },
                  },
                }}
              >
                <IconButton
                  disableFocusRipple
                  disableRipple
                  color="inherit"
                  sx={{ padding: { xs: "8px", sm: "12px" } }}
                >
                  <Store sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem" } }} />
                </IconButton>
                <Typography
                  sx={{
                    fontSize: { xs: "0.7rem", sm: "0.8rem" },
                    fontFamily: "'Cormorant Garamond', serif",
                    mt: -1,
                    color: "rgba(0, 0, 0, 0.6)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Shop
                </Typography>
              </Box>

              {/* Cart IconButton */}
              <Box>
                <IconButton
                  disableRipple
                  onClick={() => setIsCartOpen(true)}
                  color="inherit"
                  sx={{ padding: { xs: "8px", sm: "12px" } }}
                  aria-label="Open Cart"
                >
                  <ShoppingCartIcon sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem" } }} />
                </IconButton>
                <Typography
                  sx={{
                    fontSize: { xs: "0.7rem", sm: "0.8rem" },
                    fontFamily: "'Cormorant Garamond', serif",
                    mt: -1,
                    color: "rgba(0, 0, 0, 0.6)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Cart
                </Typography>
              </Box>

              {/* User Avatar & Logout menu */}
              {currentUser ? (
                <>
                  <Tooltip title={currentUser.displayName || "User"}>
                    <IconButton disableRipple onClick={handleAvatarClick} sx={{ padding: 0 }}>
                      <Avatar
                        src={currentUser.photoURL || ""}
                        alt={currentUser.displayName || "User"}
                        sx={{ width: 40, height: 40 }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                  >
                    <MenuItem onClick={handleMyOrders}>My Orders</MenuItem>
                    {currentUser.email === "asifasifcbe@gmail.com" && (
                      <MenuItem onClick={handleAdminDashboard}>Dashboard</MenuItem>
                    )}
                    <MenuItem onClick={handleLogout}>
                      <Logout fontSize="small" sx={{ marginRight: 1 }} />
                      Log Out
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Box
                  onClick={() => navigate("/login")}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    cursor: "pointer",
                    "&:hover": {
                      "& .MuiIconButton-root": { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                      "& .MuiTypography-root": { color: "rgba(0, 0, 0, 0.7)" },
                    },
                  }}
                >
                  <IconButton
                    disableRipple
                    color="inherit"
                    sx={{ padding: { xs: "8px", sm: "12px" } }}
                  >
                    <Login sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem" } }} />
                  </IconButton>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.7rem", sm: "0.8rem" },
                      fontFamily: "'Cormorant Garamond', serif",
                      mt: -1,
                      color: "rgba(0, 0, 0, 0.6)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Log In
                  </Typography>
                </Box>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Cart open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
