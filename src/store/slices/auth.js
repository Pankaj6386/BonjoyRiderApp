import {createSlice, current} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'userData',
  initialState: {
    userData: {},
    isLogin: false,
    hideBottomScreen: undefined,
    profileData: {},
    tradeApplicationData: {},
  },
  reducers: {
    saveUserData: (state, action) => {
      state.userData = action.payload;
    },
    authStatus: (state, action) => {
      state.isLogin = action.payload;
    },
    hideTab: (state, action) => {
      state.hideBottomScreen = action.payload;
    },
    saveProfileData: (state, action) => {
      state.profileData = action.payload;
    },
    saveTradeApplicationData: (state, action) => {
      state.tradeApplicationData = {
        ...state.tradeApplicationData, // Keep existing data
        ...action.payload, // Merge new data
      };
    },
  },
});

export const {
  saveUserData,
  authStatus,
  hideTab,
  saveProfileData,
  saveTradeApplicationData,
} = authSlice.actions;

export default authSlice.reducer;
