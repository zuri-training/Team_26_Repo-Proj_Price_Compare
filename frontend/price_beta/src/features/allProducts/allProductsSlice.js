import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
import { getAllProductsThunk } from './allProductsThunk'

const initialFiltersState = {
    search: ''
}

const initialState = {
    isLoading: false,
    products: [],
    totalProducts: 0,
    numOfPages: 1,
    page: 1,
    ...initialFiltersState,
}

export const getAllProducts = createAsyncThunk("allProducts/getProducts", getAllProductsThunk);

const allProductsSlice = createSlice({
    name: 'allJobs',
    initialState,
    reducers: {
        showLoading: (state) => {
            state.isLoading = true;
        },
        hideLoading: (state) => {
            state.isLoading = false;
        },
        handleChange: (state, { payload: { name, value }}) => {
            state.page = 1
            state[name] = value;
        },
        changePage: (state, { payload }) => {
            state.page = payload;
        },
        clearFilters: (state) => {
            return { ...state, ...initialFiltersState }
        },
        clearAllProducts: (state) => initialState
    },
    extraReducers: {
        [getAllProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [getAllProducts.fulfilled]: (state, {payload} ) => {
            state.isLoading = false;
            // console.log(payload)
            const { total_count, total_pages, results } = payload
            state.products = results;
            state.totalProducts = total_count;
            state.numOfPages = total_pages;
        },
        [getAllProducts.rejected]: (state, {payload}) => {
            state.isLoading = false;
            toast.error(payload)
        }
    }

})

export const {
    showLoading,
    hideLoading,
    handleChange,
    changePage,
    clearAllProductsState,
    clearFilters
} = allProductsSlice.actions

export default allProductsSlice.reducer