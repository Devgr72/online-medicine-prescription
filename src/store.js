
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../src/components/Userslice'; 

const store = configureStore({
  reducer: {
    user: userReducer, 
  },
});

export default store;
