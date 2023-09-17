import { configureStore } from '@reduxjs/toolkit';
import { productAPI } from '../services/ProductService';
import cartSlice from './features/cartSlice';

export const store = configureStore({
    reducer: {
        [productAPI.reducerPath]: productAPI.reducer,
        cart: cartSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
