import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        url: {},
        genres: {},
        login:localStorage.getItem('login'),
        author:localStorage.getItem('Author')
    },
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
        loginChnage: (state, action) => {
            state.login = action.payload;
        },
        authorChnage: (state, action) => {
            state.author = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres,loginChnage ,authorChnage} = homeSlice.actions;

export default homeSlice.reducer;
