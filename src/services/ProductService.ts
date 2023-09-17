import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../models/IProduct';

export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
    endpoints: (build) => ({
        fetchAllProducts: build.query<IProduct[], number>({
            query: () => ({
                url: '/products',
            }),
        }),
        fetchProductById: build.query<IProduct, number>({
            query: (id) => ({
                url: `/products/${id}`,
            }),
        }),
    }),
});
