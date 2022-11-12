import { configureStore } from '@reduxjs/toolkit';
import { inventarioSlice } from './slices/inventario/inventarioSlice';
import { loginSlice } from './slices/login/loginSlice';

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    inventario: inventarioSlice.reducer,
  },
});