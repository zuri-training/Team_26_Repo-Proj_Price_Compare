import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { 
    addUserToLocalStorage, 
    getUserFromLocalStorage, 
    removeUserFromLocalStorage,
    addTokensToLocalStorage, 
    getTokensFromLocalStorage, 
    removeTokensFromLocalStorage  

} from "../../utils/localStorage";
import { clearStoreThunk, loginUserThunk, registerUserThunk } from './userThunk'
import { toast } from 'react-toastify'


const initialState = {
    isLoading: false,
    isSidebarOpen: false,
    user: getUserFromLocalStorage(),
    tokens: getTokensFromLocalStorage()
}

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (user, thunkAPI) => {
        console.log(`Register User : ${JSON.stringify(user)}`)
        return registerUserThunk('/api/auth/register', user, thunkAPI)      
    }
)

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (user, thunkAPI) => {
        return loginUserThunk('api/auth/login', user, thunkAPI)
    }
)

export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logoutUser: (state, {payload}) => {
            toast.success(`Goodbye ${state.user.first_name}!`)
            state.user = null;
            removeUserFromLocalStorage();
            removeTokensFromLocalStorage();
            if (payload) {
                toast.success(payload)
            }
        },
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen
        }
    },
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true;
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.isloading = false;
            console.log(payload)
            const { data } = payload;
            state.user = data;
            addUserToLocalStorage(data);
            toast.success(`Welcome to Scout Vendor ${data.first_name}`)
            toast.success(`Email verification sent!`)

        },
        [registerUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            console.log(payload)
            if (payload.email) {
                toast.error(payload.email[0])
            }
        },
        [loginUser.pending]: (state) => {
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.isloading = false;
            const { data, tokens } = payload
            state.user = data;
            addTokensToLocalStorage(tokens)
            addUserToLocalStorage(data);
            toast.success(`Welcome Back ${data.first_name}`)
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload)
        }
    }
})

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;