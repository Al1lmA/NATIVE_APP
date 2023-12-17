import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    services: [],
    service: {},
    title:"",
};

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        setServices: (state, { payload }) => {
            console.log('setDevices');
            state.services = payload;
        },
        setService: (state, { payload }) => {
            console.log('setDevice');
            state.service = payload;
        },
        resetService: (state) => {
            console.log('resetDevice');
            state.service = {};
        },
        setTitle:(state, {payload})=>{
            console.log("changing Title to", payload);
            state.title = payload;
        },
        resetTitle: (state) => {
            console.log('resetTitle');
            state.title = "";
        },
        
    },
});

export const serviceReducer = serviceSlice.reducer;

export const { setServices, setService, resetService, setTitle, resetTitle } = serviceSlice.actions;