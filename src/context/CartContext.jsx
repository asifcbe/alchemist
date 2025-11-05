import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.items.findIndex(
        item => item.variantId === action.payload.variantId
      );
      
      if (existingItemIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingItemIndex].quantity += 1;
        return {
          ...state,
          items: newItems,
          total: state.total + action.payload.price
        };
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price
      };

    case 'REMOVE_FROM_CART':
      const itemToRemove = state.items.find(item => item.variantId === action.payload);
      if (!itemToRemove) return state;
      
      return {
        ...state,
        items: state.items.filter(item => item.variantId !== action.payload),
        total: state.total - (itemToRemove.price * itemToRemove.quantity)
      };

    case 'UPDATE_QUANTITY':
      if (action.payload.quantity < 1) return state;
      
      const updatedItems = state.items.map(item => {
        if (item.variantId === action.payload.id) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
      
      const newTotal = updatedItems.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
      );
      
      return {
        ...state,
        items: updatedItems,
        total: newTotal
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0
  });

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};