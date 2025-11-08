import React, { useEffect, useState, useRef } from 'react';
import {
  Box,
  Typography,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { db } from '../firebase/config';
import { collectionGroup, onSnapshot, updateDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

const STATUSES = [
  "Pending",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancel Requested",
  "Cancel Requested Approved",
  "Cancel Requested Rejected"
];

const AdminDashboard = () => {
  const { currentUser } = useAuth();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // State for confirmation dialog
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  // Ref to printable content for "Print All"
  const printAllRef = useRef();

  if (!currentUser || currentUser.email !== "asifasifcbe@gmail.com") {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" color="error">
          You are not authorized to view this page.
        </Typography>
      </Box>
    );
  }

  useEffect(() => {
    const ordersQuery = collectionGroup(db, "orders");

    const unsubscribe = onSnapshot(ordersQuery, (querySnapshot) => {
      const ordersList = [];
      querySnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        ordersList.push({
          id: docSnap.id,
          ...data,
          ref: docSnap.ref,
          createdAt: data.createdAt?.toDate().toLocaleString() || '',
          totalDisplay: `₹${data.total.toFixed(2)}`,
          status: data.status || "Pending",
          customer: `${data.name} (${data.email})`,
          addressDisplay: data.address || '',
        });
      });
      setOrders(ordersList);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching orders: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const confirmStatusChange = (order, status) => {
    setSelectedOrder(order);
    setNewStatus(status);
    setDialogOpen(true);
  };

  const handleStatusChangeConfirmed = async () => {
    if (!selectedOrder) return;
    try {
      await updateDoc(selectedOrder.ref, { status: newStatus });
    } catch (error) {
      console.error("Failed to update order status: ", error);
      alert("Error updating status: " + error.message);
    }
    setDialogOpen(false);
    setSelectedOrder(null);
    setNewStatus("");
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedOrder(null);
    setNewStatus("");
  };

  // Print a single order's details including address
  const printOrder = (order) => {
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print Order</title>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(`<h2>Order ID: ${order.id}</h2>`);
    printWindow.document.write(`<p><strong>Customer:</strong> ${order.customer}</p>`);
    printWindow.document.write(`<p><strong>Address:</strong> ${order.addressDisplay}</p>`);
    printWindow.document.write(`<p><strong>Status:</strong> ${order.status}</p>`);
    printWindow.document.write(`<p><strong>Total:</strong> ${order.totalDisplay}</p>`);
    printWindow.document.write(`<h3>Items:</h3><ul>`);
    order.cartItems.forEach(item => {
      printWindow.document.write(`<li>${item.name} (${item.size}ml) x ${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}</li>`);
    });
    printWindow.document.write('</ul>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  // Print all orders details and addresses
  const printAllOrders = () => {
    const printWindow = window.open('', '', 'height=800,width=900');
    printWindow.document.write('<html><head><title>Print All Orders</title></head><body>');
    orders.forEach(order => {
      printWindow.document.write('<hr/>');
      printWindow.document.write(`<h2>Order ID: ${order.id}</h2>`);
      printWindow.document.write(`<p><strong>Customer:</strong> ${order.customer}</p>`);
      printWindow.document.write(`<p><strong>Address:</strong> ${order.addressDisplay}</p>`);
      printWindow.document.write(`<p><strong>Status:</strong> ${order.status}</p>`);
      printWindow.document.write(`<p><strong>Total:</strong> ${order.totalDisplay}</p>`);
      printWindow.document.write(`<h3>Items:</h3><ul>`);
      order.cartItems.forEach(item => {
        printWindow.document.write(`<li>${item.name} (${item.size}ml) x ${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}</li>`);
      });
      printWindow.document.write('</ul>');
    });
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  if (loading) return <Typography>Loading orders...</Typography>;

  if (orders.length === 0) return <Typography>No orders available.</Typography>;

  const columns = [
    { field: 'id', headerName: 'Order ID', flex: 1, minWidth: 150 },
    { field: 'customer', headerName: 'Customer', flex: 1.5, minWidth: 200 },
    { field: 'addressDisplay', headerName: 'Address', flex: 2, minWidth: 250 },
    { field: 'totalDisplay', headerName: 'Total', width: 110, type: 'string' },
    { field: 'createdAt', headerName: 'Placed On', flex: 1, minWidth: 170 },
    {
      field: 'status',
      headerName: 'Status',
      width: 180,
      renderCell: (params) => (
        <Select
          value={params.value}
          onChange={(e) => confirmStatusChange(params.row, e.target.value)}
          fullWidth
          size="small"
        >
          {STATUSES.map(status => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
      ),
    },
    {
      field: 'items',
      headerName: 'Items',
      flex: 2,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Box sx={{ maxHeight: 100, overflowY: 'auto', width: '100%' }}>
          {params.row.cartItems?.map((item, index) => (
            <Typography key={index} variant="body2" noWrap>
              {item.name} ({item.size}ml) x {item.quantity} = ₹{(item.price * item.quantity).toFixed(2)}
            </Typography>
          ))}
        </Box>
      ),
    },
    {
      field: 'print',
      headerName: 'Print',
      width: 100,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <Button variant="contained" color="primary" size="small" onClick={() => printOrder(params.row)}>
          Print
        </Button>
      ),
    },
  ];

  return (
    <Box sx={{ height: '70vh', width: '100%', p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button variant="outlined" onClick={printAllOrders}>
          Print All Orders
        </Button>
      </Box>

      <Typography variant="h4" sx={{ mb: 3 }}>
        Admin Dashboard - All Orders
      </Typography>

      <DataGrid
        rows={orders}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 25]}
        pagination
        loading={loading}
        components={{ Toolbar: GridToolbar }}
        getRowId={(row) => row.id}
      />

      {/* Confirmation Dialog */}
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Confirm Status Change</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to change the status of order <strong>{selectedOrder?.id}</strong> to <strong>{newStatus}</strong>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="inherit">
            No
          </Button>
          <Button onClick={handleStatusChangeConfirmed} color="primary" variant="contained" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminDashboard;
