import customFetch from "../../utils/axios";
import { clearAllProductsState } from "../allProducts/allProductsSlice";
import { logoutUser } from "./userSlice";


export const registerUserThunk = async (url, user, thunkAPI) => {
    try {
        const resp = await customFetch.post(url, user)
        return resp.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)        
    }
}

export const loginUserThunk = async (url, user, thunkAPI) => {
    try {
        const resp = await customFetch.post(url, user);
        return resp.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);        
    }
};

export const clearStoreThunk = async (message, thunkAPI) => {
    try {
        thunkAPI.dispatch(logoutUser(message))
        thunkAPI.dispatch(clearAllProductsState())
        return Promise.resolve()
    } catch (error) {
        return Promise.reject()
    }
}