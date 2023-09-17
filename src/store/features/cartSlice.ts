import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../models/IProduct';

interface ICart extends IProduct {
    quantity: number;
    checked: boolean;
}

interface CartState {
    products: ICart[];
}

const initialState: CartState = {
    products: [],
};

export const cartSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.products.push({
                ...action.payload,
                quantity: 1,
                checked: true,
            });
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            );
        },
        updateProduct: (state, action) => {
            const { id } = action.payload;
            const product = state.products.find((product) => product.id == id);
            product.checked = !product.checked;
        },
        updateQuantity: (state, action) => {
            const { id, newQuantity } = action.payload;
            const product = state.products.find((product) => product.id == id);
            product.quantity = newQuantity;
        },
    },
});

export const { addToCart, removeFromCart, updateProduct, updateQuantity } =
    cartSlice.actions;

export default cartSlice.reducer;
