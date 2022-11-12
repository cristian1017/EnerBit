import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogged: false,
  isLogout: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    startLogged: (state, action) => {
      state.isLogged = action.payload.isLogged
      state.isLogout = action.payload.isLogout

    },
    Logout: (state, action) => {
      state.isLogout = true
      state.isLogged = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { startLogged, Logout } = loginSlice.actions