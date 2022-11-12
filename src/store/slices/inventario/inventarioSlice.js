import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productos: [],
  pages: 0,
  limit: 10,
  isLoading: false,
  isCreate: false,
  isUpdatedProduct: false,
}

export const inventarioSlice = createSlice({
  name: 'inventario',
  initialState,
  reducers: {
    startLoadingData: (state) => {
      state.isLoading = true;
    },
    setInventario: (state, action) => {
      state.isLoading = false;
      state.productos = action.payload.productos;
      state.pages = action.payload.pages;
      state.limit = action.payload.limit;

    },
    finishLoadingData: (state) => {
      state.isLoading = false;
    },
    setOptionUpdate: (state) => {
      state.isUpdatedProduct = true
    },
    createProduct: (state, action) => {
      state.isCreate = action.payload.isCreate;
    },
  },
})

// Action creators are generated for each case reducer function
export const { startLoadingData, setInventario, finishLoadingData, setOptionUpdate, createProduct } = inventarioSlice.actions