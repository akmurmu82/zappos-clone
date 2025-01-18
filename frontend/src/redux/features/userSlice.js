import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: { name: "", password: "", email: "" }, // to store user information (e.g., name, email, token)
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userInfo = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.userInfo = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
