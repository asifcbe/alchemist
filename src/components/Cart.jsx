import React, { useState, useEffect } from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  Paper,
  Button,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../context/CartContext";
import { shippingCost } from "../config/products";
import { useAuth } from '../context/AuthContext'; // Adjust as per your path

const Cart = ({ open, onClose }) => {
  const { cart, dispatch } = useCart();
  const { currentUser } = useAuth();

  // Init checkout info with currentUser data if available
  const [name, setName] = useState(currentUser?.displayName || '');
  const [contact, setContact] = useState(currentUser?.phoneNumber || '');
  const [address, setAddress] = useState('');
  
  // Update name/email if currentUser changes
  useEffect(() => {
    if (currentUser) {
      if (!name) setName(currentUser.displayName || '');
      if (!contact) setContact(currentUser.phoneNumber || '');
    }
  }, [currentUser]); 

  const handleQuantityChange = (variantId, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch({ type: "UPDATE_QUANTITY", payload: { variantId, quantity: newQuantity } });
  };

  const handleSizeChange = (item, newSize) => {
    if (!newSize || newSize === item.size) return;

    const newVariant = item.variants.find((v) => v.size === newSize);
    if (!newVariant) return;

    dispatch({
      type: "UPDATE_VARIANT",
      payload: {
        oldVariantId: item.variantId,
        newVariant: {
          ...item,
          size: newSize,
          price: newVariant.price,
          variantId: `${item.id}-${newSize}`,
        },
      },
    });
  };

  const handleRemoveItem = (variantId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: variantId });
  };

  // Create order summary string for notes
  const getOrderSummary = () => {
    return cart.items.map(item =>
      `${item.name} (${item.size}ml) x${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
  };

  const handleCheckout = () => {
    const amountInPaise = (cart.total + shippingCost) * 100;

    const options = {
      key: "rzp_test_RcwXpoEfiNBcVI", // replace with your Razorpay key id
      amount: amountInPaise.toFixed(0),
      currency: "INR",
      name: "Al-Chemist",
      description: "Order Payment",
      handler(response) {
        alert(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);
        // implement post-payment actions here
      },
      prefill: {
        name,
        contact,
        email: currentUser?.email || '',
      },
      notes: {
        address,
        order_details: getOrderSummary(),
      },
      theme: {
        color: "#000000",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response) {
      alert("Payment failed: " + response.error.description);
    });

    rzp.open();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 300, p: 3 }}>
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Typography variant="h5" sx={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Shopping Cart
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Cart content */}
        {cart.items.length === 0 ? (
          <Typography variant="body1" sx={{ textAlign: "center", mt: 4 }}>
            Your cart is empty
          </Typography>
        ) : (
          <>
            <List>
              {cart.items.map((item) => (
                <Paper key={item.variantId} elevation={0} sx={{ mb: 2, p: 2, borderRadius: 2, bgcolor: "#f8f8f8" }}>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 8 }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>{item.name}</Typography>
                          <Box sx={{ mt: 1 }}>
                            <ToggleButtonGroup
                              value={item.size}
                              exclusive
                              size="small"
                              onChange={(e, newSize) => handleSizeChange(item, newSize)}
                            >
                              {item.variants.map((variant) => (
                                <ToggleButton
                                  key={variant.size}
                                  value={variant.size}
                                  sx={{
                                    px: 1,
                                    "&.Mui-selected": {
                                      bgcolor: "black",
                                      color: "white",
                                      "&:hover": { bgcolor: "#333" },
                                    },
                                  }}
                                >
                                  {variant.size}ml
                                </ToggleButton>
                              ))}
                            </ToggleButtonGroup>
                          </Box>
                        </Box>
                        <IconButton size="small" onClick={() => handleRemoveItem(item.variantId)} sx={{ color: "error.main" }}>
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            bgcolor: "white",
                            borderRadius: 1,
                            border: "1px solid rgba(0,0,0,0.23)",
                          }}
                        >
                          <IconButton
                            size="small"
                            onClick={() => handleQuantityChange(item.variantId, item.quantity - 1)}
                            sx={{ p: 0.5 }}
                            disabled={item.quantity <= 1}
                          >
                            <RemoveIcon fontSize="small" />
                          </IconButton>
                          <Typography sx={{ px: 2, minWidth: "30px", textAlign: "center" }}>{item.quantity}</Typography>
                          <IconButton
                            size="small"
                            onClick={() => handleQuantityChange(item.variantId, item.quantity + 1)}
                            sx={{ p: 0.5 }}
                          >
                            <AddIcon fontSize="small" />
                          </IconButton>
                        </Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              ))}
            </List>

            {/* Checkout details */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>Checkout Details</Typography>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginBottom: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                }}
              />
              <input
                type="tel"
                placeholder="Contact Number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginBottom: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                }}
              />
              <textarea
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                }}
              />
            </Box>

            {/* Price summary */}
            <Divider sx={{ mb: 3 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography variant="subtitle1">Subtotal</Typography>
              <Typography variant="subtitle1">₹{cart.total.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
              <Typography variant="subtitle1">Shipping</Typography>
              <Typography variant="subtitle1" color="success.main">₹{shippingCost}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">₹{cart.total + shippingCost}</Typography>
            </Box>

            {/* Checkout button */}
            <Button
              variant="contained"
              fullWidth
              sx={{ bgcolor: "black", py: 1.5, "&:hover": { bgcolor: "#333" } }}
              onClick={handleCheckout}
              disabled={!name || !contact || !address}
            >
              Proceed to Checkout
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default Cart;
