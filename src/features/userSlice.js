import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        // the payload is an object that we pass along with the action
        login: (state, action) => {
        state.user = action.payload;
        },
        logout: (state) => {
        state.user = null;
        // Whenever we logout, we set USER back to null
        },
    },
});

export const { login, logout } = userSlice.actions;

//Allows us to pull the information
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
