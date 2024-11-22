import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';

export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
    const response = await axios.get('/products');
    return response.data;
});

const productSlice = createSlice({
    name: 'products',
    initialState: { items: [], status: null },
    reducers: {},
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            state.items = action.payload;
        },
    },
});

export default productSlice.reducer;
