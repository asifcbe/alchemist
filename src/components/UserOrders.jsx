import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase/config';
import { collection, query, orderBy, getDocs, updateDoc, Timestamp } from 'firebase/firestore';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

const UserOrders = () => {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [orderToCancel, setOrderToCancel] = useState(null);
  const [updatingOrderId, setUpdatingOrderId] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!currentUser || !currentUser.uid) {
        setOrders([]);
        setLoading(false);
        return;
      }

      try {
        const ordersRef = collection(db, "users", currentUser.uid, "orders");
        const q = query(ordersRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        const ordersList = querySnapshot.docs.map(docSnap => ({
          id: docSnap.id,
          ...docSnap.data(),
          ref: docSnap.ref,
        }));
        setOrders(ordersList);
      } catch (error) {
        console.error("Error getting orders: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [currentUser]);

  const openCancelDialog = (order) => {
    setOrderToCancel(order);
    setCancelDialogOpen(true);
  };

  const closeCancelDialog = () => {
    setOrderToCancel(null);
    setCancelDialogOpen(false);
  };

  const handleCancelOrderConfirmed = async () => {
    if (!orderToCancel) return;

    setUpdatingOrderId(orderToCancel.id);
    try {
      await updateDoc(orderToCancel.ref, {
        cancelRequested: true,
        cancelRequestedAt: Timestamp.now(),
        status: "Cancel Requested"
      });
      setOrders(prev => prev.map(o => o.id === orderToCancel.id ? { ...o, cancelRequested: true, status: "Cancel Requested" } : o));
    } catch (error) {
      alert("Failed to request order cancellation: " + error.message);
    }
    setUpdatingOrderId(null);
    closeCancelDialog();
  };

  if (loading) {
    return <Typography>Loading orders...</Typography>;
  }

  if (orders.length === 0) {
    return <Typography>No orders found.</Typography>;
  }

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>Your Orders</Typography>
      <List>
        {orders.map((order) => (
          <Paper key={order.id} sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle1">Order ID: {order.id}</Typography>
            <Typography variant="body2" color="text.secondary">
              Placed on: {order.createdAt?.toDate().toLocaleString()}
            </Typography>
            <Typography>Status: <strong>{order.status || "Pending"}</strong></Typography>
            {order.cancelRequested && (
              <Typography color="warning.main" sx={{ fontWeight: 'bold' }}>
                Cancellation Requested
              </Typography>
            )}
            <Typography>Total: ₹{order.total.toFixed(2)}</Typography>
            <Typography sx={{ mt: 1, fontWeight: 'bold' }}>Items:</Typography>
            <List dense>
              {order.cartItems.map((item, index) => (
                <ListItem key={index}>
                  {item.name} ({item.size}ml) x {item.quantity} = ₹{(item.price * item.quantity).toFixed(2)}
                </ListItem>
              ))}
            </List>
            {!order.cancelRequested && order.status !== "Delivered" && (
              <Stack direction="row" justifyContent="flex-end" sx={{ mt: 1 }}>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  disabled={updatingOrderId === order.id}
                  onClick={() => openCancelDialog(order)}
                >
                  {updatingOrderId === order.id ? "Requesting..." : "Cancel Order"}
                </Button>
              </Stack>
            )}
          </Paper>
        ))}
      </List>

      {/* Cancel confirmation dialog */}
      <Dialog open={cancelDialogOpen} onClose={closeCancelDialog}>
        <DialogTitle>Confirm Cancellation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to request cancellation for order ID: <strong>{orderToCancel?.id}</strong>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeCancelDialog} color="inherit">
            No
          </Button>
          <Button onClick={handleCancelOrderConfirmed} color="error" variant="contained" autoFocus>
            Yes, Cancel Order
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserOrders;
