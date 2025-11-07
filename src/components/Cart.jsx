import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Button,
  Stack,
  Divider,
  Paper,
  Chip,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../context/CartContext";
import { shippingCost } from "../config/products";

const Cart = ({ open, onClose }) => {
  const { cart, dispatch } = useCart();

  // --- Key Fix: Validate newQuantity and always use correct IDs
  const handleQuantityChange = (variantId, newQuantity) => {
    if (newQuantity < 1) return; // Don't allow below 1

    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { variantId, quantity: newQuantity },
    });
  };

  // --- Fix: Prevent size change removing non-matching items
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
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: variantId,
    });
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 400, p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Shopping Cart
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 3 }} />

        {cart.items.length === 0 ? (
          <Typography variant="body1" sx={{ textAlign: "center", mt: 4 }}>
            Your cart is empty
          </Typography>
        ) : (
          <>
            <List>
              {cart.items.map((item) => (
                <Paper
                  key={item.variantId}
                  elevation={0}
                  sx={{
                    mb: 2,
                    p: 2,
                    borderRadius: 2,
                    bgcolor: "#f8f8f8",
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      style={{
                        width: 80,
                        height: 80,
                        objectFit: "cover",
                        borderRadius: 8,
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 500 }}
                          >
                            {item.name}
                          </Typography>
                          <Box sx={{ mt: 1 }}>
                            <ToggleButtonGroup
                              value={item.size}
                              exclusive
                              size="small"
                              onChange={(e, newSize) =>
                                handleSizeChange(item, newSize)
                              }
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
                                      "&:hover": {
                                        bgcolor: "#333",
                                      },
                                    },
                                  }}
                                >
                                  {variant.size}ml
                                </ToggleButton>
                              ))}
                            </ToggleButtonGroup>
                          </Box>
                        </Box>
                        <IconButton
                          size="small"
                          onClick={() => handleRemoveItem(item.variantId)}
                          sx={{ color: "error.main" }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mt: 2,
                        }}
                      >
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
                            onClick={() =>
                              handleQuantityChange(
                                item.variantId,
                                item.quantity - 1
                              )
                            }
                            sx={{ p: 0.5 }}
                            disabled={item.quantity <= 1}
                          >
                            <RemoveIcon fontSize="small" />
                          </IconButton>
                          <Typography
                            sx={{
                              px: 2,
                              minWidth: "30px",
                              textAlign: "center",
                            }}
                          >
                            {item.quantity}
                          </Typography>
                          <IconButton
                            size="small"
                            onClick={() =>
                              handleQuantityChange(
                                item.variantId,
                                item.quantity + 1
                              )
                            }
                            sx={{ p: 0.5 }}
                          >
                            <AddIcon fontSize="small" />
                          </IconButton>
                        </Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 500 }}
                        >
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              ))}
            </List>

            <Box sx={{ mt: 4 }}>
              <Divider sx={{ mb: 3 }} />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography variant="subtitle1">Subtotal</Typography>
                <Typography variant="subtitle1">
                  ₹{cart.total.toFixed(2)}
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
              >
                <Typography variant="subtitle1">Shipping</Typography>
                <Typography variant="subtitle1" color="success.main">
                  ₹{shippingCost}
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
              >
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6">₹{cart.total + shippingCost}</Typography>
              </Box>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: "black",
                  py: 1.5,
                  "&:hover": {
                    bgcolor: "#333",
                  },
                }}
              >
                Proceed to Checkout
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default Cart;
